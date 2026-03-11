// Deekas Nail Art Community JavaScript

// Categories mapping to full user requirements



const remoteImages = {
    "nail art": [
        "trendy_nail_art_1.png",
        "trendy_nail_art_2.png",
        "trendy_nail_art_3.png",
        "trendy_nail_art_4.png",
        "trendy_nail_art_5.png",
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bmFpbCUyMGFydHxlbnwwfHx8fDE3NzI4MzUxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1720343409646-960f6dcccae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmFpbCUyMGFydHxlbnwwfHx8fDE3NzI4MzUxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmFpbCUyMGFydHxlbnwwfHx8fDE3NzI4MzUxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bmFpbCUyMGFydHxlbnwwfHx8fDE3NzI4MzUxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1618606679166-7f313aa5b26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bmFpbCUyMGFydHxlbnwwfHx8fDE3NzI4MzUxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1736434518489-0eb84070017f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG5haWwlMjBhcnR8ZW58MHx8fHwxNzcyODM1MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG5haWwlMjBhcnR8ZW58MHx8fHwxNzcyODM1MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1688583417770-ff6cc18071dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG5haWwlMjBhcnR8ZW58MHx8fHwxNzcyODM1MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://plus.unsplash.com/premium_photo-1670590785960-c6f592c8d877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG5haWwlMjBhcnR8ZW58MHx8fHwxNzcyODM1MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    "french manicure": [
        "user_match_1.jpg",
        "user_match_2.jpg",
        "user_match_3.jpg",
        "user_match_4.jpg",
        "french_mani_almond_classic.png",
        "french_mani_square_classic.png",
        "french_3.png",
        "french_4.png",
        "french_5.png",
        "french_6.png",
        "french_7.png",
        "french_8.png",
        "french_9.png",
        "french_10.png",
        "french_11.png",
        "french_12.png"
    ],
    "chrome nails": [
        "chrome_nail_curated_1.jpg",
        "chrome_nail_curated_2.jpg",
        "chrome_nail_curated_3.jpg",
        "chrome_nail_curated_4.jpg",
        "chrome_nail_curated_5.jpg",
        "chrome_nail_curated_6.jpg",
        "chrome_nail_curated_7.jpg",
        "chrome_nail_curated_8.jpg",
        "chrome_nail_curated_9.jpg",
        "chrome_nail_curated_10.jpg",
        "chrome_nail_curated_11.jpg",
        "chrome_nail_curated_12.jpg",
        "chrome_nail_curated_13.jpg",
        "chrome_nail_curated_14.jpg",
        "chrome_nail_curated_15.jpg",
        "chrome_nail_curated_16.jpg",
        "chrome_nail_curated_17.jpg",
        "chrome_nail_curated_18.jpg",
        "chrome_nail_curated_19.jpg",
        "chrome_nail_curated_20.jpg",
        "https://plus.unsplash.com/premium_photo-1717529138354-59cb91e9caef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y2hyb21lJTIwbmFpbHN8ZW58MHx8fHwxNzcyODM1MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1736434518489-0eb84070017f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y2hyb21lJTIwbmFpbHN8ZW58MHx8fHwxNzcyODM1MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://plus.unsplash.com/premium_photo-1670590820777-3b03f589cb89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8Y2hyb21lJTIwbmFpbHN8ZW58MHx8fHwxNzcyODM1MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    "pedicure toes": [],
    "minimalist nails": [
        "https://plus.unsplash.com/premium_photo-1661681437189-49ade9e240ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWluaW1hbGlzdCUyMG5haWxzfGVufDB8fHx8MTc3MjgzNTE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1769687209448-025548dfca8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMG5haWxzfGVufDB8fHx8MTc3MjgzNTE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1602585578130-c9076e09330d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWluaW1hbGlzdCUyMG5haWxzfGVufDB8fHx8MTc3MjgzNTE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1601244668565-afba8cbd2b51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWluaW1hbGlzdCUyMG5haWxzfGVufDB8fHx8MTc3MjgzNTE1OXww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    "floral nails": [
        "floral_nails_1.jpg",
        "floral_nails_2.jpg",
        "floral_nails_3.jpg",
        "floral_nails_4.jpg",
        "floral_nails_5.jpg",
        "floral_nails_6.jpg",
        "floral_nails_7.jpg",
        "floral_nails_8.jpg",
        "floral_nails_9.jpg",
        "floral_nails_10.jpg",
        "floral_nails_11.jpg"
    ],
    "bridal nails": [
        "bridal_nails_1.jpg",
        "bridal_nails_2.jpg",
        "bridal_nails_3.jpg",
        "bridal_nails_4.jpg",
        "bridal_nails_5.jpg",
        "bridal_nails_6.jpg",
        "bridal_nails_7.jpg",
        "bridal_nails_8.jpg",
        "bridal_nails_9.jpg",
        "bridal_nails_10.jpg",
        "bridal_nails_11.jpg",
        "bridal_nails_12.jpg",
        "bridal_nails_13.jpg",
        "bridal_nails_14.jpg",
        "bridal_nails_15.jpg",
        "bridal_nails_16.jpg",
        "bridal_nails_17.jpg",
        "bridal_nails_18.jpg"
    ],
    "glitter nails": [
        "https://images.unsplash.com/photo-1648844421727-cde6c4246b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8Z2xpdHRlciUyMG5haWxzfGVufDB8fHx8MTc3MjgzNTE2MXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1772322586702-73125782bd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8Z2xpdHRlciUyMG5haWxzfGVufDB8fHx8MTc3MjgzNTE2MXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1772322586785-3a34772cbc61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8Z2xpdHRlciUyMG5haWxzfGVufDB8fHx8MTc3MjgzNTE2MXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1772322586754-34c9e6f5be6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fGdsaXR0ZXIlMjBuYWlsc3xlbnwwfHx8fDE3NzI4MzUxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1588359953494-0c215e3cedc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fGdsaXR0ZXIlMjBuYWlsc3xlbnwwfHx8fDE3NzI4MzUxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    "bold neon nails": [
        "bold_neon_nails_1.jpg",
        "bold_neon_nails_2.jpg",
        "bold_neon_nails_3.jpg",
        "bold_neon_nails_4.jpg",
        "bold_neon_nails_5.jpg",
        "bold_neon_nails_6.jpg",
        "bold_neon_nails_7.jpg",
        "bold_neon_nails_8.jpg",
        "bold_neon_nails_9.jpg",
        "bold_neon_nails_10.jpg",
        "bold_neon_nails_11.jpg",
        "bold_neon_nails_12.jpg",
        "bold_neon_nails_13.jpg",
        "bold_neon_nails_14.jpg",
        "bold_neon_nails_15.jpg",
        "bold_neon_nails_16.jpg",
        "bold_neon_nails_17.jpg",
        "bold_neon_nails_18.jpg",
        "bold_neon_nails_19.jpg"
    ],
    "seasonal nails": [
        "seasonal_nails_1.jpg",
        "seasonal_nails_2.jpg",
        "seasonal_nails_3.jpg",
        "seasonal_nails_4.jpg",
        "seasonal_nails_5.jpg",
        "seasonal_nails_6.jpg",
        "seasonal_nails_7.jpg",
        "seasonal_nails_8.jpg",
        "seasonal_nails_9.jpg",
        "seasonal_nails_10.jpg",
        "seasonal_nails_11.jpg",
        "seasonal_nails_12.jpg",
        "seasonal_nails_13.jpg",
        "seasonal_nails_14.jpg",
        "seasonal_nails_15.jpg",
        "seasonal_nails_16.jpg",
        "seasonal_nails_17.jpg",
        "seasonal_nails_18.jpg",
        "seasonal_nails_19.jpg"
    ],
    "glossy pedicure": [
        "glossy_pedicure_1.jpg",
        "glossy_pedicure_2.jpg",
        "glossy_pedicure_3.jpg",
        "glossy_pedicure_4.jpg",
        "glossy_pedicure_5.jpg",
        "glossy_pedicure_6.jpg",
        "glossy_pedicure_7.jpg",
        "glossy_pedicure_8.jpg",
        "glossy_pedicure_9.jpg",
        "glossy_pedicure_10.jpg",
        "glossy_pedicure_11.jpg",
        "glossy_pedicure_12.jpg",
        "glossy_pedicure_13.jpg",
        "glossy_pedicure_14.jpg",
        "glossy_pedicure_15.jpg"
    ],
    "red pedicure": [],
    "nude pedicure": [],
    "minimal": [
        "https://images.unsplash.com/photo-1659990668491-9bcdc5b06338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGN1dGUlMjBtaW5pJTIwbmFpbHN8ZW58MHx8fHwxNzcyOTUzNjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1596887772390-2648c0155278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fG1pbmltYWwlMjBuYWlsJTIwYXJ0fGVufDB8fHx8MTc3Mjk1MzY5MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1568564708935-be7b595e0730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NjR8fGN1dGUlMjBtaW5pJTIwbmFpbHN8ZW58MHx8fHwxNzcyOTUzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://plus.unsplash.com/premium_photo-1769099604337-b32581a39c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OTd8fGN1dGUlMjBtaW5pJTIwbmFpbHN8ZW58MHx8fHwxNzcyOTUzNjkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1687723977270-4f86dbda39e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGN1dGUlMjBtaW5pJTIwbmFpbHN8ZW58MHx8fHwxNzcyOTUzNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1608278618512-c5968bfa0523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NjB8fG1pbmltYWwlMjBuYWlsJTIwYXJ0fGVufDB8fHx8MTc3Mjk1MzY5MXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1675453574976-fd2baeab95f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8ODZ8fGN1dGUlMjBtaW5pJTIwbmFpbHN8ZW58MHx8fHwxNzcyOTUzNjkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1657200558577-ccc66c45d2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fGN1dGUlMjBtaW5pJTIwbmFpbHN8ZW58MHx8fHwxNzcyOTUzNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1772322586649-fc11154e76b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWluaW1hbCUyMG5haWwlMjBhcnR8ZW58MHx8fHwxNzcyOTUzNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NzZ8fGN1dGUlMjBtaW5pJTIwbmFpbHN8ZW58MHx8fHwxNzcyOTUzNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1572814601679-4ef8f7b5ebd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzF8fG1pbmltYWwlMjBuYWlsJTIwYXJ0fGVufDB8fHx8MTc3Mjk1MzY5MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1772322586785-3a34772cbc61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1pbmltYWwlMjBuYWlsJTIwYXJ0fGVufDB8fHx8MTc3Mjk1MzY4NHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://plus.unsplash.com/premium_photo-1740020261459-984d8b0c126e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fG1pbmltYWwlMjBuYWlsJTIwYXJ0fGVufDB8fHx8MTc3Mjk1MzY5MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1762373349045-c2decd4ec3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8ODd8fGN1dGUlMjBtaW5pJTIwbmFpbHN8ZW58MHx8fHwxNzcyOTUzNjkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    "french pedicure": [
        "french_pedicure_1.jpg",
        "french_pedicure_2.jpg",
        "french_pedicure_3.jpg",
        "french_pedicure_4.jpg",
        "french_pedicure_5.jpg",
        "french_pedicure_6.jpg",
        "french_pedicure_7.jpg",
        "french_pedicure_8.jpg",
        "french_pedicure_9.jpg",
        "french_pedicure_10.jpg",
        "french_pedicure_11.jpg",
        "french_pedicure_12.jpg",
        "french_pedicure_13.jpg",
        "french_pedicure_14.jpg"
    ],
    "floral pedicure": [
        "floral_pedi_1.png",
        "floral_pedi_2.png",
        "floral_pedicure_10.jpg",
        "floral_pedicure_13.jpg"
    ],
    "minimal pedicure": [
        "minimal_pedicure_1.jpg",
        "minimal_pedicure_2.jpg",
        "minimal_pedicure_3.jpg",
        "minimal_pedicure_4.jpg",
        "minimal_pedicure_5.jpg",
        "minimal_pedicure_6.jpg",
        "minimal_pedicure_7.jpg",
        "minimal_pedicure_8.jpg",
        "minimal_pedicure_9.jpg",
        "minimal_pedicure_10.jpg",
        "minimal_pedicure_12.jpg",
        "minimal_pedicure_13.jpg",
        "minimal_pedicure_14.jpg",
        "minimal_pedicure_15.jpg"
    ],
    "bold pedicure": [
        "bold_pedicure_1.jpg",
        "bold_pedicure_2.jpg",
        "bold_pedicure_4.jpg",
        "bold_pedicure_5.jpg",
        "bold_pedicure_6.jpg",
        "bold_pedicure_8.jpg",
        "bold_pedicure_9.jpg",
        "bold_pedicure_10.jpg",
        "bold_pedicure_11.jpg",
        "bold_pedicure_12.jpg",
        "bold_pedicure_13.jpg",
        "bold_pedicure_14.jpg"
    ],
    "bridal pedicure": [
        "bridal_pedicure_1.jpg",
        "bridal_pedicure_2.jpg",
        "bridal_pedicure_3.jpg",
        "bridal_pedicure_4.jpg",
        "bridal_pedicure_5.jpg",
        "bridal_pedicure_6.jpg",
        "bridal_pedicure_7.jpg",
        "bridal_pedicure_9.jpg",
        "bridal_pedicure_10.jpg",
        "bridal_pedicure_11.jpg",
        "bridal_pedicure_12.jpg",
        "bridal_pedicure_13.jpg",
        "bridal_pedicure_14.jpg"
    ],
    "seasonal pedicure": [
        "seasonal_pedi_1.png",
        "seasonal_pedi_2.png"
    ],
    "chrome pedicure": [
        "chrome_pedi_1.png",
        "chrome_pedi_2.png",
        "chrome_pedi_3.png",
        "chrome_pedi_4.png",
        "chrome_pedi_5.png",
        "chrome_pedi_6.png",
        "chrome_pedi_7.png"
    ],
    "glitter pedicure": [
        "glitter_pedi_1.png",
        "glitter_pedi_2.png",
        "glitter_pedi_3.png",
        "glitter_pedi_4.png",
        "glitter_pedi_5.png",
        "glitter_pedi_6.png"
    ]
};

// Create stateful arrays that can be POPpED to guarantee ZERO REPETITION
const imagePools = {
    'pedicure_glossy': ['glossy_pedicure.png', ...(remoteImages['glossy pedicure'] || [])],
    'pedicure_minimal': ['minimal_pedicure.png', ...(remoteImages['minimal pedicure'] || [])],
    'pedicure_bold': ['bold_pedicure.png', ...(remoteImages['bold pedicure'] || [])],
    'pedicure_french': ['french_pedicure.png', ...(remoteImages['french pedicure'] || [])],
    'pedicure_floral': ['floral_pedicure.png', ...(remoteImages['floral pedicure'] || [])],
    'pedicure_bridal': ['french_pedicure.png', ...(remoteImages['bridal pedicure'] || [])],
    'pedicure_seasonal': ['seasonal_pedicure.png', ...(remoteImages['seasonal pedicure'] || [])],
    'pedicure_chrome': ['chrome_pedicure.png', ...(remoteImages['chrome pedicure'] || [])],
    'pedicure_glitter': ['glitter_pedicure.png', ...(remoteImages['glitter pedicure'] || [])],
    'pedicure_default': ['french_pedicure.png'],

    'manicure_french': ['french_manicure_v3.png', ...(remoteImages['french manicure'] || [])],
    'manicure_chrome': [...(remoteImages['chrome nails'] || [])],
    'manicure_minimal': [...(remoteImages['minimal'] || [])],
    'manicure_floral': [...(remoteImages['floral nails'] || [])],
    'manicure_bridal': [...(remoteImages['bridal nails'] || [])],
    'manicure_bold': [...(remoteImages['bold neon nails'] || [])],
    'manicure_seasonal': [...(remoteImages['seasonal nails'] || [])],
    'manicure_default': [...(remoteImages['nail art'] || [])]
};

function getRemoteImage(cat, type) {
    let key = type + '_' + cat;
    if (!imagePools[key]) key = type + '_default';

    // GUARANTEE NO REPETITION! Pop the image from the array so it's gone forever.
    if (imagePools[key] && imagePools[key].length > 0) {
        return imagePools[key].shift(); // remove from start
    }

    // If we run out...
    return null; // Return null to signal EXHAUSTED
}

const appData = {
    manicure: {
        title: "Manicure Inspiration",
        categories: {
            french: {
                name: "French Manicure",
                image: "french_manicure_v2.png",
                subs: []
            },
            chrome: {
                name: "Chrome",
                image: "chrome.png",
                subs: []
            },
            minimal: {
                name: "Minimal",
                image: "minimal_nails.png",
                subs: []
            },
            bridal: {
                name: "Bridal",
                image: "bridal.png",
                subs: []
            },
            floral: {
                name: "Floral",
                image: "floral.png",
                subs: []
            },
            bold: {
                name: "Bold & Colorful",
                image: "bold.png",
                subs: []
            },
            seasonal: {
                name: "Seasonal",
                image: "seasonal.png",
                subs: []
            }
        }
    },
    pedicure: {
        title: "Pedicure Inspiration",
        categories: {
            french: {
                name: "French Pedicure",
                image: "french_pedicure.png",
                subs: []
            },
            glossy: {
                name: "Glossy Colors",
                image: "glossy_pedicure.png",
                subs: []
            },
            floral: {
                name: "Floral Pedicure",
                image: "floral_pedicure.png",
                subs: []
            },
            minimal: {
                name: "Minimal",
                image: "minimal_pedicure.png",
                subs: []
            },
            bold: {
                name: "Bold & Bright",
                image: "bold_pedicure.png",
                subs: []
            },
            bridal: {
                name: "Bridal",
                image: "french_pedicure.png",
                subs: []
            },
            seasonal: {
                name: "Seasonal",
                image: "seasonal_pedicure.png",
                subs: []
            },
            chrome: {
                name: "Chrome",
                image: "chrome_pedicure.png",
                subs: []
            },
            glitter: {
                name: "Glitter",
                image: "glitter_pedicure.png",
                subs: []
            }
        }
    }
};

// Manicure guaranteed local images
const manicureImages = [
    'french.png',
    'chrome.png',
    'bridal.png',
    'floral.png',
    'bold.png',
    'seasonal.png',
    'minimal_nails.png'
];

// Special Viral/Trending Images

const trendingViralPosts = [
    { title: "Glazed Donut Nails Viral Trend", category: "chrome", type: "manicure" },
    { title: "Aura Nails (Pink & Purple)", category: "bold", type: "manicure" },
    { title: "Coquette Bow 3D Art", category: "bridal", type: "manicure" },
    { title: "Jelly Nails Sweet Pink", category: "minimal", type: "manicure" },
    { title: "Cat Eye Velvet Illusion", category: "chrome", type: "manicure" },
    { title: "Clean Girl Aesthetic Toes", category: "minimal", type: "pedicure" },
    { title: "Floral Spring Vibes", category: "floral", type: "manicure" },
    { title: "Holiday Sparkle Trend", category: "seasonal", type: "manicure" }
];


let nailPosts = [];
let trendingPosts = [];

function seedInitialData() {
    const authors = ["GlamNails", "PolishMe", "NailArtDaily", "BeautyGuru", "LuxuryTips", "NailTechSarah", "AestheticVibes", "TheNailStudio", "PedicureQueen", "ChromeLover"];
    let idCounter = 1;

    // 1. Generate Trending Posts (Unique)
    for (let tp of trendingViralPosts) {
        let tpImg = getRemoteImage(tp.category, tp.type);
        if (!tpImg) continue; // Skip if we don't have a unique image

        trendingPosts.push({
            id: idCounter++,
            type: tp.type,
            category: tp.category,
            subcategory: 'Trending Viral',
            title: tp.title,
            description: `This ${tp.title} look is going absolutely viral right now across all platforms!`,
            image: tpImg,
            author: authors[Math.floor(Math.random() * authors.length)],
            likes: Math.floor(Math.random() * 20000) + 10000, // Massive likes
            isLiked: false,
            date: '2 days ago'
        });
    }

    // 2. Generate Massive Catalog
    for (let type of ['manicure', 'pedicure']) {
        const cats = Object.keys(appData[type].categories);
        for (let cat of cats) {
            while (true) {
                let imgSource = getRemoteImage(cat, type);
                if (!imgSource) break;

                nailPosts.push({
                    id: idCounter++,
                    type: type,
                    category: cat,
                    subcategory: 'all',
                    title: `${appData[type].categories[cat].name} Inspiration`,
                    description: `A stunning take on ${appData[type].categories[cat].name} for your next salon visit. Saved by many!`,
                    imgBackup: imgSource,
                    image: imgSource,
                    author: authors[Math.floor(Math.random() * authors.length)],
                    likes: Math.floor(Math.random() * 5000) + 50,
                    isLiked: false,
                    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString()
                });
            }
        }
    }

    // Shuffle the main array
    nailPosts = nailPosts.sort(() => .5 - Math.random());

    try {
        const savedPosts = JSON.parse(localStorage.getItem('deekas_user_posts') || '[]');
        if (savedPosts && savedPosts.length > 0) {
            nailPosts = [...savedPosts, ...nailPosts];
        }
    } catch (e) {
        console.warn("Could not load from localStorage", e);
    }
}
seedInitialData();

// App State
let currentView = 'home';
let currentType = null;
let currentCategory = 'all';
let currentSubcategory = 'all';
let searchQuery = '';
let currentDetailPost = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    switchView('home');
    setupSearch();
    setupUploadForm();
});

function switchView(view, type = null, category = 'all', subcategory = 'all') {
    currentView = view;
    searchQuery = '';
    document.getElementById('searchInput').value = '';

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (document.getElementById(`nav-${view}`)) {
        document.getElementById(`nav-${view}`).classList.add('active');
    }

    const homeView = document.getElementById('homeView');
    const galleryView = document.getElementById('galleryView');

    if (view === 'home') {
        homeView.style.display = 'block';
        galleryView.style.display = 'none';
        renderHome();
    } else {
        homeView.style.display = 'none';
        galleryView.style.display = 'block';

        currentType = type || (view === 'manicure' ? 'manicure' : (view === 'pedicure' ? 'pedicure' : null));
        currentCategory = category;
        currentSubcategory = subcategory;

        renderGalleryHeader();
        renderCategoriesBar();
        renderSubcategoriesBar();
        renderGalleryGrid();
    }
    window.scrollTo(0, 0);
}

function renderHome() {
    // Featured uses the dedicated Trending Viral Posts so they don't duplicate random gallery images
    document.getElementById('featuredScroll').innerHTML = trendingPosts.map(post => `
        <div class="featured-card" onclick="openDetailModal(${post.id})">
            <img src="${post.image}" alt="${post.title}">
            <div class="gallery-overlay">
                <h3 class="post-title">${post.title}</h3>
                <span class="post-category-tag" style="top:10px; left:10px; position:absolute; opacity:1; transform:none;">
                    <i class="fas fa-fire" style="color:#ffb703;"></i> Trending
                </span>
            </div>
        </div>
    `).join('');

    // Popular Manicures
    const maniCats = Object.keys(appData.manicure.categories).slice(0, 8);
    document.getElementById('manicureCategoriesGrid').innerHTML = maniCats.map(key => {
        const cat = appData.manicure.categories[key];
        const countObj = nailPosts.filter(p => p.type === 'manicure' && p.category === key);
        const count = countObj.length;
        return `
        <div class="cat-card" onclick="switchView('manicure', 'manicure', '${key}')">
            <div class="cat-card-img"><img src="${cat.image}" alt="${cat.name}"></div>
            <div class="cat-card-title">${cat.name} <span class="cat-card-count">${count}+ Designs</span></div>
        </div>
        `;
    }).join('');

    // Popular Pedicures
    const pediCats = Object.keys(appData.pedicure.categories).slice(0, 8);
    document.getElementById('pedicureCategoriesGrid').innerHTML = pediCats.map(key => {
        const cat = appData.pedicure.categories[key];
        const countObj = nailPosts.filter(p => p.type === 'pedicure' && p.category === key);
        const count = countObj.length;
        return `
        <div class="cat-card" onclick="switchView('pedicure', 'pedicure', '${key}')">
            <div class="cat-card-img"><img src="${cat.image}" alt="${cat.name}"></div>
            <div class="cat-card-title">${cat.name} <span class="cat-card-count">${count}+ Designs</span></div>
        </div>
        `;
    }).join('');

    // Recent Uploads - Sequence them fairly across categories instead of clumped
    const recent = [];

    // Safely extract the core ID from an image URL to catch structural duplicates
    const getImgId = (url) => {
        if (!url) return 'null';
        const match = url.match(/photo-[\w-]+/);
        return match ? match[0] : url.split('?')[0];
    };

    const step = Math.max(1, Math.floor(nailPosts.length / 24));
    for (let i = 0; i < nailPosts.length && recent.length < 24; i += step) {
        if (!recent.some(p => getImgId(p.image) === getImgId(nailPosts[i].image))) {
            recent.push(nailPosts[i]);
        }
    }
    // fill any gaps
    let fallbackIdx = 0;
    while (recent.length < 24 && fallbackIdx < nailPosts.length) {
        if (!recent.some(p => getImgId(p.image) === getImgId(nailPosts[fallbackIdx].image))) {
            recent.push(nailPosts[fallbackIdx]);
        }
        fallbackIdx++;
    }

    document.getElementById('recentUploadsGrid').innerHTML = generateMasonryHTML(recent);
}

function renderGalleryHeader() {
    let title = "Trending Designs";
    let subtitle = "The most viral and popular nail art chosen by our community.";

    if (searchQuery) {
        title = `Search Results for "${searchQuery}"`;
        subtitle = "Find inspiration for your next look.";
    } else if (currentType) {
        title = appData[currentType].title;
        subtitle = `Browse hundreds of ${currentType} inspirations.`;
    }

    document.getElementById('galleryTitle').innerText = title;
    document.getElementById('gallerySubtitle').innerText = subtitle;
}

function renderCategoriesBar() {
    const bar = document.getElementById('mainCategoriesBar');
    if (!currentType) {
        bar.parentElement.style.display = 'none';
        return;
    }

    bar.parentElement.style.display = 'flex';
    let html = `<div class="category-chip ${currentCategory === 'all' ? 'active' : ''}" onclick="setCategory('all')">All Categories</div>`;

    const catsObj = appData[currentType].categories;
    for (let key in catsObj) {
        html += `<div class="category-chip ${currentCategory === key ? 'active' : ''}" onclick="setCategory('${key}')">${catsObj[key].name}</div>`;
    }
    bar.innerHTML = html;
}

function renderSubcategoriesBar() {
    const wrapper = document.getElementById('subFiltersWrapper');
    const bar = document.getElementById('subCategoriesBar');

    if (currentCategory === 'all' || !currentType || !appData[currentType].categories[currentCategory]) {
        wrapper.style.display = 'none';
        return;
    }

    wrapper.style.display = 'flex';
    const subs = appData[currentType].categories[currentCategory].subs;

    let html = `<div class="sub-category-chip ${currentSubcategory === 'all' ? 'active' : ''}" onclick="setSubcategory('all')">All Designs</div>`;
    subs.forEach(sub => {
        html += `<div class="sub-category-chip ${currentSubcategory === sub ? 'active' : ''}" onclick="setSubcategory('${sub}')">${sub}</div>`;
    });

    bar.innerHTML = html;
}

function setCategory(cat) {
    currentCategory = cat;
    currentSubcategory = 'all';
    renderCategoriesBar();
    renderSubcategoriesBar();
    renderGalleryGrid();
}

function setSubcategory(sub) {
    currentSubcategory = sub;
    renderSubcategoriesBar();
    renderGalleryGrid();
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        if (searchQuery.length > 0) {
            if (currentView === 'home') switchView('trending');
        }
        renderGalleryHeader();
        renderGalleryGrid();
    });
}

function renderGalleryGrid() {
    const grid = document.getElementById('masonryGrid');

    let filtered = [];

    if (searchQuery) {
        filtered = [...trendingPosts, ...nailPosts].filter(p =>
            p.title.toLowerCase().includes(searchQuery) ||
            p.category.toLowerCase().includes(searchQuery) ||
            p.subcategory.toLowerCase().includes(searchQuery)
        );
    } else {
        if (currentView === 'trending') {
            filtered = [...trendingPosts]; // Show the unique viral ones
        } else {
            filtered = [...nailPosts];
        }

        if (currentType) filtered = filtered.filter(p => p.type === currentType);
        if (currentCategory !== 'all') filtered = filtered.filter(p => p.category === currentCategory);
        if (currentSubcategory !== 'all') filtered = filtered.filter(p => p.subcategory === currentSubcategory);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; padding: 50px; color:#6b7280; font-size:1.2rem;">No designs found. Try adjusting your filters or search terms.</p>`;
    } else {
        grid.innerHTML = generateMasonryHTML(filtered.slice(0, 100)); // cap at 100 for perf
    }
}

function generateMasonryHTML(postsArray) {
    return postsArray.map(post => {
        let tagText = post.category;
        if (currentType && appData[currentType] && appData[currentType].categories[post.category]) {
            tagText = appData[currentType].categories[post.category].name;
            if (post.subcategory !== 'all') tagText = post.subcategory;
        } else if (post.subcategory === 'Trending Viral') {
            tagText = 'Trending 🔥';
        }

        return `
        <div class="gallery-item" onclick="openDetailModal(${post.id})">
            <span class="post-category-tag">${tagText}</span>
            <img src="${post.image}" alt="${post.title}" class="gallery-img">
            <div class="gallery-overlay">
                <div class="post-info">
                    <h3 class="post-title">${post.title}</h3>
                    <div class="post-author">By ${post.author}</div>
                </div>
                <div class="post-actions">
                    <button class="action-btn ${post.isLiked ? 'liked' : ''}" onclick="toggleLike(${post.id}, event)" title="Like">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" onclick="savePost(event)" title="Save to Pinterest">
                        <i class="fab fa-pinterest"></i>
                    </button>
                </div>
            </div>
        </div>
    `}).join('');
}

/* --- INTERACTIONS --- */
function toggleLike(id, event) {
    event.stopPropagation();
    let post = nailPosts.find(p => p.id === id) || trendingPosts.find(p => p.id === id);
    if (post) {
        post.isLiked = !post.isLiked;
        if (post.isLiked) post.likes += 1;
        else post.likes -= 1;

        if (currentView === 'home') renderHome();
        else renderGalleryGrid();
    }
}

function savePost(event, isDetail = false) {
    if (!isDetail && event) event.stopPropagation();
    alert('Pinned to your boards! 📌');
}

function sharePost(id, event) {
    if (event) event.stopPropagation();
    alert('Link copied to clipboard! 🔗');
}

/* --- DETAIL MODAL --- */
function openDetailModal(id) {
    let post = nailPosts.find(p => p.id === id) || trendingPosts.find(p => p.id === id);
    if (!post) return;

    currentDetailPost = post;

    let imgEl = document.getElementById('detailImg');
    imgEl.src = post.image;
    imgEl.onerror = null;

    document.getElementById('detailTitle').innerText = post.title;
    if (document.getElementById('detailDescription')) {
        document.getElementById('detailDescription').innerText = post.description || "Inspiration discovered in the community gallery.";
    }
    document.getElementById('detailAuthorAvatar').innerText = post.author.charAt(0).toUpperCase();
    document.getElementById('detailAuthorName').innerText = post.author;
    document.getElementById('detailDate').innerText = post.date || "Just now";

    // Set Tags securely
    let catName = post.category;
    if (appData[post.type] && appData[post.type].categories[post.category]) {
        catName = appData[post.type].categories[post.category].name;
    }

    document.getElementById('detailTags').innerHTML = `
        <span class="sub-category-chip active">${post.type.toUpperCase()}</span>
        <span class="category-chip">${catName}</span>
        <span class="category-chip">${post.subcategory}</span>
    `;

    updateDetailLikeUI();

    const modal = document.getElementById('postDetailModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
    document.getElementById('postDetailModal').classList.remove('active');
    document.body.style.overflow = '';
    currentDetailPost = null;
}

function toggleDetailLike() {
    if (!currentDetailPost) return;

    currentDetailPost.isLiked = !currentDetailPost.isLiked;
    if (currentDetailPost.isLiked) currentDetailPost.likes += 1;
    else currentDetailPost.likes -= 1;

    updateDetailLikeUI();

    if (currentView === 'home') renderHome();
    else renderGalleryGrid();
}

function updateDetailLikeUI() {
    const btn = document.getElementById('detailLikeBtn');
    const count = document.getElementById('detailLikeCount');

    count.innerText = currentDetailPost.likes;
    if (currentDetailPost.isLiked) {
        btn.classList.add('liked');
        btn.innerHTML = `<i class="fas fa-heart"></i> <span>${currentDetailPost.likes}</span>`;
    } else {
        btn.classList.remove('liked');
        btn.innerHTML = `<i class="far fa-heart"></i> <span>${currentDetailPost.likes}</span>`;
    }
}


/* --- UPLOAD MODAL --- */
function openUploadModal() {
    document.getElementById('uploadModal').classList.add('active');
    updateUploadCategories();
}

function closeUploadModal() {
    document.getElementById('uploadModal').classList.remove('active');
    document.getElementById('imageInput').value = '';
    document.getElementById('uploadPreview').style.display = 'none';
    document.getElementById('postTitle').value = '';
    if (document.getElementById('postDesc')) document.getElementById('postDesc').value = '';
    document.getElementById('dropZone').querySelector('p').style.display = 'block';
    document.getElementById('dropZone').querySelector('.demo-icon').style.display = 'block';
    window.lastUploadedUrl = null;
}

function updateUploadCategories() {
    const type = document.getElementById('postType').value;
    const catSelect = document.getElementById('postCategory');
    const cats = appData[type].categories;

    let html = '';
    for (let key in cats) {
        html += `<option value="${key}">${cats[key].name}</option>`;
    }
    catSelect.innerHTML = html;
    updateUploadSubcategories();
}

function updateUploadSubcategories() {
    const type = document.getElementById('postType').value;
    const cat = document.getElementById('postCategory').value;
    const subSelect = document.getElementById('postSubcategory');

    subSelect.innerHTML = '<option value="all">All Designs</option>';
}

function setupUploadForm() {
    const dropZone = document.getElementById('dropZone');
    const imageInput = document.getElementById('imageInput');
    const uploadPreview = document.getElementById('uploadPreview');

    dropZone.addEventListener('click', () => imageInput.click());

    imageInput.addEventListener('change', async function () {
        if (this.files && this.files[0]) {
            let file = this.files[0];
            const isHeic = file.type === 'image/heic' || file.type === 'image/heif' || file.name.toLowerCase().endsWith('.heic');
            
            dropZone.querySelector('p').innerText = 'Processing image...';
            
            const formData = new FormData();
            formData.append('image', file);

            try {
                // Only attempt backend upload if we are running locally
                const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
                
                if (isLocalhost) {
                    const response = await fetch('/upload', {
                        method: 'POST',
                        body: formData
                    });
                    
                    if (!response.ok) throw new Error("Server not responding or unavailable");
                    const data = await response.json();
                    
                    window.lastUploadedUrl = data.url;
                    uploadPreview.src = data.url;
                } else {
                    // Force jump to catch block on GitHub Pages
                    throw new Error("Static host detected. Skipping backend upload.");
                }
                
            } catch (serverError) {
                console.log("Using local browser processing:", serverError.message);
                
                try {
                    // Fallback local processing
                    let finalBlob = file;
                    
                    if (isHeic && typeof heic2any !== 'undefined') {
                        dropZone.querySelector('p').innerText = 'Converting iPhone image locally...';
                        try {
                            const convertedBlob = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.8 });
                            finalBlob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
                        } catch (e) {
                            alert('Error converting iPhone HEIC image locally. Please try a standard JPG/PNG.');
                            dropZone.querySelector('p').innerText = 'Drag & drop image here or click to browse';
                            return;
                        }
                    }
                    
                    // Convert blob to Base64 to save properly in localStorage on static hosts
                    let base64data = null;
                    
                    // Safari Lockdown Mode heavily disables FileReader APIs on static sites
                    if (typeof FileReader !== 'undefined') {
                        base64data = await new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = () => resolve(reader.result);
                            reader.onerror = () => reject(new Error("Browser failed to read the image file."));
                            reader.readAsDataURL(finalBlob);
                        });
                    } else {
                        // Fallback completely to ObjectURLs if FileReader is blocked by Apple Security
                        console.warn("FileReader API blocked by Safari Lockdown Mode. Defaulting to ObjectURL.");
                        base64data = URL.createObjectURL(finalBlob);
                        
                        // We must immediately display it because object URLs are temporary
                        uploadPreview.src = base64data; 
                        window.lastUploadedUrl = base64data;
                    }
                    
                    if (!base64data) throw new Error("Image conversion resulted in empty data.");
                    
                    // only re-assign if it successfully parsed as a string (FileReader)
                    if(typeof base64data === 'string' && base64data.startsWith('data:image')) {
                        window.lastUploadedUrl = base64data;
                        uploadPreview.src = base64data;
                    }
                } catch (fallbackError) {
                    alert("Upload error: " + fallbackError.message);
                    dropZone.querySelector('p').innerText = 'Drag & drop image here or click to browse';
                    return;
                }
            }
            
            // Shared success UI flow manually applied after either approach succeeds
            uploadPreview.style.display = 'block';
            dropZone.querySelector('p').style.display = 'none';
            dropZone.querySelector('.demo-icon').style.display = 'none';
        }
    });

    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.borderColor = '#ec4899'; });
    dropZone.addEventListener('dragleave', (e) => { e.preventDefault(); dropZone.style.borderColor = '#d1d5db'; });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = '#d1d5db';
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            imageInput.files = e.dataTransfer.files;
            imageInput.dispatchEvent(new Event('change'));
        }
    });

    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('uploadModal')) closeUploadModal();
        if (event.target == document.getElementById('postDetailModal')) closeDetailModal();
    });
}

function submitPost() {
    const title = document.getElementById('postTitle').value;
    let desc = '';
    if (document.getElementById('postDesc')) {
        desc = document.getElementById('postDesc').value;
    }
    const type = document.getElementById('postType').value;
    const category = document.getElementById('postCategory').value;
    const subcategory = document.getElementById('postSubcategory').value;
    const imageInput = document.getElementById('imageInput');

    if (!title || !document.getElementById('uploadPreview').src || document.getElementById('uploadPreview').style.display === 'none') {
        alert('Please fill out the title and upload an image.');
        return;
    }

    const previewSrc = window.lastUploadedUrl || document.getElementById('uploadPreview').src;

    const newPost = {
        id: nailPosts.length + 1000,
        type: type,
        category: category,
        subcategory: subcategory,
        title: title,
        description: desc,
        image: previewSrc,
        author: 'You',
        likes: 0,
        isLiked: false,
        date: 'Just now'
    };

    nailPosts.unshift(newPost);

    try {
        const savedPosts = JSON.parse(localStorage.getItem('deekas_user_posts') || '[]');
        savedPosts.unshift(newPost);
        localStorage.setItem('deekas_user_posts', JSON.stringify(savedPosts));
    } catch (e) {
        console.warn("Could not save to localStorage (maybe image is too large)", e);
    }

    closeUploadModal();
    switchView('home');

    setTimeout(() => {
        const recentTitle = document.querySelector('#recentUploadsGrid').parentElement.querySelector('.group-header');
        if (recentTitle) recentTitle.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}