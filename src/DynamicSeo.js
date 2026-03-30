import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { config } from "./config/Config";
import { apiList, invokeApi } from "./services/ApiServices";

const DynamicSeo = () => {
    const location = useLocation();
    const [siteName, setSiteName] = useState("");
    const [seoData, setSeoData] = useState(null);

    useEffect(() => {
        const currentPath = location.pathname;
        setSiteName(currentPath);
    }, [location.pathname]);

    useEffect(() => {
        const getSeoData = async () => {
            let params = {
                siteName
            };
            try {
                if (siteName) {
                    const response = await invokeApi(
                        config.apiBaseUrl + apiList.getMetaDataBySite,
                        params
                    );
                    if (response?.status >= 200 && response?.status < 300) {
                        if (response.data.responseCode === "200") {
                            setSeoData(response.data.seoManagers);
                        }
                    }
                }
            } catch (error) { }
        };
        getSeoData();
    }, [siteName]);

    useEffect(() => {
        if (seoData) {
            const {
                siteType,
                metaTitle,
                metaDescription,
                metaKeywords,
                ogTitle,
                ogType,
                ogDescription,
                ogUrl,
                ogSiteName,
                twitterTitle,
                twitterDescription,
                canonicalUrl,
                articlePublisher,
                indexingStatus,
                ratings,
                ratingsCount,
                seoFaqs,
                orgName,
                orgWebsite,
                orgStreet,
                orgLocality,
                orgRegion,
                orgPincode,
                orgTelephone,
                orgImageUrl,
                breadcrumbListing,
                videoName,
                videoDescription,
                videoContent,
                videoThumbnail,
                videoEmbed,
                articleHeadline,
                articleDescription,
                articleKeywords,
                articleBody,
                articleName,
                articleUrl,
                createdDate,
                updatedDate,
            } = seoData;

            document.getElementById("metaTitle").innerText = metaTitle || "";
            document
                .getElementById("metaDescription")
                .setAttribute("content", metaDescription || "");
            document
                .getElementById("metaKeywords")
                .setAttribute("content", metaKeywords || "");
            document.getElementById("ogTitle").setAttribute("content", ogTitle || "");
            document.getElementById("ogType").setAttribute("content", ogType || "");
            document
                .getElementById("ogDescription")
                .setAttribute("content", ogDescription || "");
            document.getElementById("ogUrl").setAttribute("content", ogUrl || "");
            document.getElementById("ogSiteName").setAttribute("content", ogSiteName || "");
            document.getElementById("twitterTitle").setAttribute("content", twitterTitle || "");
            document
                .getElementById("twitterDescription")
                .setAttribute("content", twitterDescription || "");
            document.getElementById("canonical").setAttribute("href", canonicalUrl || "");
            document
                .getElementById("indexingStatus")
                .setAttribute("content", indexingStatus || "");
            document
                .getElementById("articlePublisher")
                .setAttribute("content", articlePublisher || "");

            const formatDate = (date) => {
                const dateObj = new Date(date);
                const offset = dateObj.getTimezoneOffset() * 60000;
                const localISOTime = new Date(dateObj.getTime() - offset).toISOString();
                return localISOTime.slice(0, -1) + "+08:00";
            };

            const formattedCreatedDate = createdDate ? formatDate(createdDate) : "2024-08-03T08:00:00+08:00";
            const formattedUpdatedDate = updatedDate ? formatDate(updatedDate) : "2024-08-03T09:20:00+08:00";

            const insertScript = (data) => {
                const script = document.createElement("script");
                script.setAttribute("type", "application/ld+json");
                script.innerHTML = JSON.stringify(data, null, 2);
                document.head.appendChild(script);
            };

            if (breadcrumbListing) {
                insertScript({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "name": "VihaanInnovations",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "home",
                            "item": "https://www.vihaaninnovations.com/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": siteType === "blog" ? "blog" : "college",
                            "item": breadcrumbListing
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": metaTitle || "",
                            "item": `https://www.vihaaninnovations.com${siteName}`
                        }
                    ]
                });
            }

            if (orgName || orgWebsite || orgStreet || orgLocality || orgRegion || orgPincode || orgTelephone || orgImageUrl) {
                insertScript({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": orgName || "",
                    "url": orgWebsite || "",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": orgStreet || "",
                        "addressLocality": orgLocality || "",
                        "addressRegion": orgRegion || "",
                        "postalCode": orgPincode || "",
                        "addressCountry": "IN"
                    },
                    "telephone": orgTelephone || "",
                    "image": orgImageUrl ? [orgImageUrl] : [],
                    ...(ratings && ratingsCount ? {
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": parseFloat(ratings).toFixed(1),
                            "ratingCount": parseInt(ratingsCount),
                            "bestRating": 5,
                            "worstRating": 1
                        }
                    } : {})
                });
            }

            if (articleHeadline || articleDescription) {
                insertScript({
                    "@context": "https://schema.org",
                    "@type": "NewsArticle",
                    "headline": articleHeadline || "",
                    "description": articleDescription || "",
                    "image": ["https://www.vihaaninnovations.com/static/media/vihaan-logo.dd0aaa055aacbe6c5843.png"],
                    "datePublished": formattedCreatedDate || "",
                    "dateModified": formattedUpdatedDate || formattedCreatedDate || "",
                    "keywords": articleKeywords,
                    "articleBody": articleBody,
                    "url": articleUrl,
                    "author": [{
                        "@type": "Person",
                        "name": "Vihaan Innovations",
                        "url": "https://www.vihaaninnovations.com/"
                    }],
                    "publisher": [{
                        "@type": "Organization",
                        "name": "VihaanInnovations",
                        "url": "https://www.vihaaninnovations.com/"
                    }]
                });
            }

            if (seoFaqs?.length) {
                insertScript({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "name": "FAQ",
                    "mainEntity": seoFaqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                });
            }

            if (videoName || videoContent || videoThumbnail || videoEmbed) {
                insertScript({
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    "name": videoName || "",
                    "description": videoDescription || "",
                    "contentUrl": videoContent || "",
                    "embedUrl": videoEmbed || "",
                    "thumbnailUrl": videoThumbnail || "",
                    "uploadDate": formattedCreatedDate || ""
                });
            }

            if (metaTitle && metaDescription) {
                insertScript({
                    "@context": "http://schema.org",
                    "@type": "WebSite",
                    "name": "VihaanInnovations.com",
                    "url": "https://www.vihaaninnovations.com",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://www.vihaaninnovations.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                });
            }
        }
    }, [seoData]);

    return null;
};

export default DynamicSeo;
