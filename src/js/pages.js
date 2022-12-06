const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const hidden = fs.readFileSync("src/includes/hidden.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionHeaderActive = fs.readFileSync("src/includes/section-header-active.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Екатеринбургу 300 лет",
        head,
        sectionHeaderActive,
        sectionFooter,
        hidden,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/about.html",
        filename: "about.html",
        inject: "body",
        title: "О событии | Екатеринбургу 300 лет",
        head,
        sectionHeaderActive,
        sectionFooter,
        hidden,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/bill.html",
        filename: "bill.html",
        inject: "body",
        title: "Афиша | Екатеринбургу 300 лет",
        head,
        sectionHeaderActive,
        sectionFooter,
        hidden,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/single-bill.html",
        filename: "single-bill.html",
        inject: "body",
        title: "Одиночная афиша | Екатеринбургу 300 лет",
        head,
        sectionHeader,
        sectionFooter,
        hidden,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/history.html",
        filename: "history.html",
        inject: "body",
        title: "История | Екатеринбургу 300 лет",
        head,
        sectionHeaderActive,
        sectionFooter,
        hidden,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/residents.html",
        filename: "residents.html",
        inject: "body",
        title: "Жителям | Екатеринбургу 300 лет",
        head,
        sectionHeaderActive,
        sectionFooter,
        hidden,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/improvement.html",
        filename: "improvement.html",
        inject: "body",
        title: "Благоустройство | Екатеринбургу 300 лет",
        head,
        sectionHeaderActive,
        sectionFooter,
        hidden,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/single-improvement.html",
        filename: "single-improvement.html",
        inject: "body",
        title: "Одиночная благоустройство | Екатеринбургу 300 лет",
        head,
        sectionHeader,
        sectionFooter,
        hidden,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/special.html",
        filename: "special.html",
        inject: "body",
        title: "Спецпроект | Екатеринбургу 300 лет",
        head,
        sectionHeader,
        sectionFooter,
        hidden,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/single-special.html",
        filename: "single-special.html",
        inject: "body",
        title: "Спецпроект одиночный | Екатеринбургу 300 лет",
        head,
        sectionHeaderActive,
        sectionFooter,
        hidden,
        temp
    }),
];