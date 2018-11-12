<?php

return [
    "general" => [
        "timezone" => "Europe/Zurich",
        "path_variable" => "",
        "domain" => "",
        "redirect_to_maindomain" => FALSE,
        "language" => "en",
        "validLanguages" => "de",
        "fallbackLanguages" => [
            "de" => ""
        ],
        "defaultLanguage" => "de",
        "loginscreencustomimage" => "//www.w-vision.ch/static/img/backend/admin_pimcore5.jpg",
        "disableusagestatistics" => FALSE,
        "debug_admin_translations" => FALSE,
        "devmode" => FALSE,
        "instanceIdentifier" => "",
        "show_cookie_notice" => FALSE
    ],
    "branding" => [
        "color_login_screen" => "#0d64aa",
        "color_admin_interface" => "#0d64aa",
    ],
    "applicationlog" => [
        "mail_notification" => [
            "send_log_summary" => FALSE,
            "filter_priority" => NULL,
            "mail_receiver" => ""
        ],
        "archive_treshold" => "30",
        "archive_alternative_database" => ""
    ],
    "email" => [
        "sender" => [
            "name" => "w-vision AG",
            "email" => "support@w-vision.ch"
        ],
        "return" => [
            "name" => "",
            "email" => ""
        ],
        "method" => "mail",
        "smtp" => [
            "host" => "",
            "port" => "",
            "ssl" => NULL,
            "name" => "",
            "auth" => [
                "method" => NULL,
                "username" => "",
                "password" => NULL
            ]
        ],
        "debug" => [
            "emailaddresses" => "support@w-vision.ch"
        ]
    ],
    "documents" => [
        "versions" => [
            "days" => NULL,
            "steps" => 10
        ],
        "default_controller" => "default",
        "default_action" => "default",
        "error_pages" => [
            "default" => "/fehler"
        ],
        "createredirectwhenmoved" => FALSE,
        "allowtrailingslash" => "no",
        "generatepreview" => TRUE
    ],
    "objects" => [
        "versions" => [
            "days" => NULL,
            "steps" => 10
        ]
    ],
    "assets" => [
        "versions" => [
            "days" => NULL,
            "steps" => 10
        ],
        "icc_rgb_profile" => "",
        "icc_cmyk_profile" => "",
        "hide_edit_image" => FALSE,
        "disable_tree_preview" => FALSE
    ],
    "services" => [
        "google" => [
            "client_id" => "",
            "email" => "",
            "simpleapikey" => "",
            "browserapikey" => "AIzaSyAiOfc83woVr_Xrd8yXh59BBSEyIKWxwD4"
        ]
    ],
    "cache" => [
        "enabled" => FALSE,
        "lifetime" => NULL,
        "excludePatterns" => "",
        "excludeCookie" => ""
    ],
    "webservice" => [
        "enabled" => FALSE
    ],
    "httpclient" => [
        "adapter" => "Socket",
        "proxy_host" => "",
        "proxy_port" => "",
        "proxy_user" => "",
        "proxy_pass" => ""
    ],
    "newsletter" => [
        "sender" => [
            "name" => "",
            "email" => ""
        ],
        "return" => [
            "name" => "",
            "email" => ""
        ],
        "method" => "mail",
        "smtp" => [
            "host" => "",
            "port" => "",
            "ssl" => NULL,
            "name" => "",
            "auth" => [
                "method" => NULL,
                "username" => "",
                "password" => ""
            ]
        ],
        "debug" => NULL,
        "usespecific" => FALSE
    ]
];
