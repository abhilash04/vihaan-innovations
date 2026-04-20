import re
import json
import os

def parse_file(filepath, outpath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    sections = re.split(r'🚀 1\. HERO SECTION', content)
    
    locations_dict = {}
    
    # Try to load existing
    if os.path.exists(outpath):
        try:
            with open(outpath, 'r', encoding='utf-8') as f:
                existing_text = f.read()
                # Extract json from: export const customWebDevLocationContent = {...};
                json_str = existing_text.replace("export const customWebDevLocationContent = ", "").strip()
                if json_str.endswith(";"):
                    json_str = json_str[:-1]
                locations_dict = json.loads(json_str)
        except Exception as e:
            print("Could not load existing DB", e)

    for section in sections[1:]:
        lines = [l.strip() for l in section.split('\n') if l.strip()]
        
        def get_block(start_marker, end_markers):
            try:
                start_idx = lines.index(start_marker) + 1
            except ValueError:
                return []
            end_idx = len(lines)
            for i in range(start_idx, len(lines)):
                if any(lines[i].startswith(m) for m in end_markers) or lines[i].startswith('🚀'):
                    end_idx = i
                    break
            return lines[start_idx:end_idx]

        badge = lines[lines.index('Top Label') + 1] if 'Top Label' in lines else ""
        h1 = lines[lines.index('H1') + 1] if 'H1' in lines else ""
        hero_p = lines[lines.index('Paragraph') + 1] if 'Paragraph' in lines else ""
        
        location_match = re.search(r'in (.*)', h1)
        if not location_match:
            continue
        location_name = location_match.group(1).strip()
        
        service_lines = get_block('Service Cards', ['🚀'])
        services = []
        for i in range(0, len(service_lines), 2):
            if i+1 < len(service_lines):
                services.append({"title": service_lines[i], "desc": service_lines[i+1]})

        seo_h2_idx = next((i for i, x in enumerate(lines) if "CORE CONTENT + SIDEBAR SECTION" in x), -1)
        seo_h2 = lines[seo_h2_idx+2] if seo_h2_idx != -1 else ""
        
        p1 = lines[lines.index('Paragraph 1') + 1] if 'Paragraph 1' in lines else ""
        p2 = lines[lines.index('Paragraph 2') + 1] if 'Paragraph 2' in lines else ""
        p3 = lines[lines.index('Paragraph 3') + 1] if 'Paragraph 3' in lines else ""
        
        highlight_box = lines[lines.index('Highlight Box') + 1: lines.index('Highlight Box') + 3] if 'Highlight Box' in lines else []
        highlight_title = highlight_box[0] if len(highlight_box) > 0 else ""
        highlight_text = highlight_box[1] if len(highlight_box) > 1 else ""

        process_h2_idx = next((i for i, x in enumerate(lines) if x.startswith("How We Deliver ") or x.startswith("Our Process") or x.startswith("Our Website Development Process")), -1)
        if process_h2_idx == -1:
             process_h2_idx = lines.index('Our Workflow') + 1 if 'Our Workflow' in lines else -1

        process = []
        if process_h2_idx != -1:
            for i in range(process_h2_idx+1, len(lines)):
                if lines[i].startswith('🚀'): break
                if re.match(r'^\d{2} ', lines[i]):
                     title = lines[i][3:].strip()
                     desc = lines[i+1] if i+1 < len(lines) else ""
                     process.append({"title": title, "desc": desc})

        why_h2_idx = next((i for i, x in enumerate(lines) if "Why Choose" in x or "Why USA Businesses" in x or "Why German" in x or "Why Singapore" in x or "Why Partner With Us" in lines[i-1:i]), -1)
        why_h2 = lines[why_h2_idx] if why_h2_idx != -1 else ""
        why_p = ""
        try:
            p_idx = lines.index('Paragraph', why_h2_idx)
            why_p = lines[p_idx+1]
        except ValueError:
            pass

        feature_lines = get_block('Feature Cards', ['🚀'])
        features = []
        for i in range(0, len(feature_lines), 2):
            if i+1 < len(feature_lines):
                features.append({"title": feature_lines[i], "desc": feature_lines[i+1]})

        test_h2_idx = next((i for i, x in enumerate(lines) if "What Clients Say" in x or "Client Feedback" in x), -1)
        test_h2 = lines[test_h2_idx] if test_h2_idx != -1 else ""
        testimonials = []
        if test_h2_idx != -1:
            for i in range(test_h2_idx+1, len(lines), 2):
                if i+1 < len(lines) and not lines[i].startswith('🚀'):
                    name_role = lines[i].split('–')
                    name = name_role[0].strip()
                    role = name_role[1].strip() if len(name_role)>1 else ""
                    text = lines[i+1].strip()
                    testimonials.append({"author": name, "role": role, "text": text})

        locations_dict[location_name.lower()] = {
            "hero": {
                "title": h1,
                "badge": badge,
                "subtext": hero_p
            },
            "services": {
                 "title": lines[lines.index('Specialized Services')+1:lines.index('Specialized Services')+2][0] if 'Specialized Services' in lines else (lines[lines.index('Our Expertise')+1:lines.index('Our Expertise')+2][0] if 'Our Expertise' in lines else ""),
                 "cards": services
            },
            "seoContent": {
                "title": seo_h2,
                "paragraphs": [p1, p2, p3],
                "highlight": {
                    "title": highlight_title,
                    "text": highlight_text
                 } 
            },
            "process": {
                "title": lines[process_h2_idx] if process_h2_idx != -1 else "Our Strategic Process",
                "steps": process
            },
            "about": {
                "title": why_h2,
                "description": why_p,
                "features": features
            },
            "testimonials": {
                "title": test_h2,
                "items": testimonials
            }
        }
        
    with open(outpath, 'w', encoding='utf-8') as f:
        f.write("export const customWebDevLocationContent = ")
        f.write(json.dumps(locations_dict, indent=2))
        f.write(";\n")

if __name__ == "__main__":
    parse_file('/Users/apple/Documents/Projects/all-coding-files/vihaan-innovations/scripts/raw_content_2.txt', '/Users/apple/Documents/Projects/all-coding-files/vihaan-innovations/src/componants/pages/innerpages.js/LocationPageLayout/locationCustomContentDB.js')
