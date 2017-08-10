module.exports = [{
        "type": "heading",
        "defaultValue": "Watchface Configuration"
    },
    {
        "type": "text",
        "defaultValue": "This watchface is open source, you can find out the github repo on Pebble's about page."
    },
    {
        "type": "section",
        "items": [{
                "type": "heading",
                "defaultValue": "Colors Settings"
            },
            {
                "type": "color",
                "messageKey": "color",
                "defaultValue": "0x0055AA",
                "layout": "COLOR",
                "label": "Theme Color"
            }
        ]
    },
    {
        "type": "section",
        "items": [{
                "type": "heading",
                "defaultValue": "More Settings"
            },
            {
                "type": "select",
                "messageKey": "language",
                "label": "Language",
                "defaultValue": "english",
                "description": "Need save and reload this page to take effect",
                "options": [{
                        "label": "English",
                        "value": "english"
                    },
                    {
                        "label": "简体中文",
                        "value": "chinese"
                    },
                    {
                        "label": "日本語",
                        "value": "japanese"
                    }
                ]
            }
        ]
    },
    {
        "type": "submit",
        "defaultValue": "Save Settings"
    }
];