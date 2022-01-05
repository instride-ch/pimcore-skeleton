<?php

use Pimcore\Bootstrap;
use Pimcore\Kernel;
use Pimcore\Tool;
use Symfony\Component\HttpFoundation\Request;

include __DIR__ . '/../vendor/autoload.php';

Bootstrap::setProjectRoot();
Bootstrap::bootstrap();

$request = Request::createFromGlobals();

// set current request as property on tool as there's no
// request stack available yet
Tool::setCurrentRequest($request);

/** @var Kernel $kernel */
$kernel = Bootstrap::kernel();

// reset current request - will be read from request stack from now on
Tool::setCurrentRequest();

$response = $kernel->handle($request);
$response->send();

$kernel->terminate($request, $response);
