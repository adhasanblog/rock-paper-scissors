module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            margin: {
                47: "47px",
            },
            width: {
                702: "702px",
            },
            height: {
                152: "152px",
            },
            colors: {
                "bg-clr-1": "#1F3756",
                "bg-clr-2": "#141539",
                "score-text": "#2A46C0",
                "score-count": "#3B4363 ",
                "header-outline": "#606E85",
                "score-board-1": "#FFFFFF",
                "score-board-2": "#F4F4F4",
            },
            fontFamily: {
                barlow: ['"Barlow Semi Condensed", sans-serif'],
            },
            backgroundImage: {
                triangle: "url('/img/bg-triangle.svg')",
            },
        },
    },
    plugins: [],
};