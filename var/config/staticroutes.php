<?php 

return [
    1 => [
        "id" => 1,
        "name" => "app_search",
        "pattern" => "/^\\/([a-z]{2})\\/suche/",
        "reverse" => "/%_locale/suche",
        "module" => "AppBundle",
        "controller" => "@AppBundle\\Controller\\SearchController",
        "action" => "search",
        "variables" => "_locale",
        "defaults" => NULL,
        "siteId" => [

        ],
        "priority" => 1,
        "legacy" => FALSE,
        "creationDate" => 1553768287,
        "modificationDate" => 1553768290
    ]
];
