<?php

use Otomaties\Attributer\Helpers\Assets;
use Otomaties\Attributer\Helpers\Config;
use Otomaties\Attributer\Helpers\Loader;
use Otomaties\Attributer\Helpers\View;
use Otomaties\Attributer\Plugin;

/**
 * Plugin Name:       Otomaties Attributer
 * Description:       Attribute visitors to a specific source
 * Version:           1.0.1
 * Author:            Tom Broucke
 * Author URI:        https://tombroucke.be/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       otomaties-attributer
 * Domain Path:       /resources/languages
 */
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

/**
 * Get main plugin class instance
 *
 * @return Plugin
 */
function otomatiesAttributer()
{
    static $plugin;

    if (! $plugin) {
        $plugin = new Plugin(
            new Loader,
            new Config
        );
        do_action('otomaties_attributer_functionality', $plugin);
    }

    return $plugin;
}

// Bind the class to the service container
add_action('otomaties_attributer_functionality', function ($plugin) {
    $plugin->bind(Loader::class, function ($plugin) {
        return $plugin->getLoader();
    });
    $plugin->bind(View::class, function ($plugin) {
        return new View($plugin->config('paths.views'));
    });
    $plugin->bind(Assets::class, function ($plugin) {
        return new Assets($plugin->config('paths.public'));
    });
}, 10);

// Initialize the plugin and run the loader
add_action('otomaties_attributer_functionality', function ($plugin) {
    $plugin
        ->initialize()
        ->runLoader();
}, 9999);

otomatiesAttributer();
