module.exports = [{
        "type": "heading",
        "defaultValue": "表盘设置"
    },
    {
        "type": "text",
        "defaultValue": "该表盘程序源代码已托管在Github，您可以在Pebble的关于页面上找到Repo地址。"
    },
    {
        "type": "section",
        "items": [{
                "type": "heading",
                "defaultValue": "颜色设置"
            },
            {
                "type": "color",
                "messageKey": "color",
                "defaultValue": "0x0055AA",
                "layout": "COLOR",
                "label": "主题颜色"
            }
        ]
    },
    {
        "type": "section",
        "items": [{
                "type": "heading",
                "defaultValue": "更多设置"
            },
            {
                "type": "select",
                "messageKey": "language",
                "label": "语言",
                "defaultValue": "english",
                "description": "修改语言需要保存并重新进入该页面才能生效",
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
        "defaultValue": "保存设置"
    },
    {
        "type": "text",
        "defaultValue": "国内用户可加入 QQ群：581154120 进行讨论与反馈"
    }
];