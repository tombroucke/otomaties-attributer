<?php

namespace Otomaties\Attributer\Modules;

use Otomaties\Attributer\Modules\Abstracts\Module;

class Frontend extends Module
{
    public function init()
    {
        $this->loader->addAction('wp_enqueue_scripts', $this, 'enqueueScripts');
    }

    public function enqueueScripts()
    {
        if (property_exists($this->assets->entrypoints()->app, 'js')) {
            foreach ($this->assets->entrypoints()->app->js as $js) {
                wp_enqueue_script('otomaties-attributer-app-' . $js, $this->assets->url($js), [], null, true);
            }
        }

        // if (property_exists($this->assets->entrypoints()->app, 'css')) {
        //     foreach ($this->assets->entrypoints()->app->css as $css) {
        //         wp_enqueue_style('otomaties-attributer-app-' . $css, $this->assets->url($css), [], null);
        //     }
        // }
    }
}
