module.exports = {

"[project]/.next-internal/server/app/blogs/[blog-slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/blogs/[blog-slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Page,
    "generateMetadata": ()=>generateMetadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
// Hàm fetch blog từ server
async function getBlog(slug) {
    try {
        const res = await fetch(`http://localhost:1337/api/blogs/by-slug/${slug}`);
        const data = await res.json();
        return data.data || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
// Hàm fetch bài liên quan
async function getRelatedBlogs(categoryId) {
    try {
        const res = await fetch(`http://localhost:1337/api/blogs?filters[cate][documentId][$eq]=${categoryId}&populate=cover&pagination[page]=1&pagination[pageSize]=3`);
        const data = await res.json();
        return data.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}
async function generateMetadata({ params }) {
    const blog = await getBlog(params["blog-slug"]);
    if (!blog) return {};
    return {
        title: blog.title,
        description: blog.subContent,
        openGraph: {
            title: blog.title,
            description: blog.subContent,
            images: blog.cover?.url ? [
                {
                    url: blog.cover.url
                }
            ] : []
        }
    };
}
async function Page({ params }) {
    const slug = params["blog-slug"];
    const blogDetail = await getBlog(slug);
    if (!blogDetail) {
        return null;
    }
    const blogs = blogDetail?.cate ? await getRelatedBlogs(blogDetail.cate.documentId) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: blogDetail.documentId
    }, void 0, false, {
        fileName: "[project]/src/app/blogs/[blog-slug]/page.tsx",
        lineNumber: 66,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/blogs/[blog-slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blogs/[blog-slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__27c6f647._.js.map