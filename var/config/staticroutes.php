<?php

return [
    1 => [
        "id" => 1,
        "name" => "app_search",
        "pattern" => "/^\\/([a-z]{2})\\/search/",
        "reverse" => "/%_locale/search",
        "module" => "AppBundle",
        "controller" => "@AppBundle\\Controller\\SearchController",
        "action" => "search",
        "variables" => "_locale",
        "defaults" => null,
        "siteId" => 0,
        "priority" => 1,
        "creationDate" => 0,
        "modificationDate" => 0
    ]
];