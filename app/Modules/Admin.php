<?php

namespace Otomaties\Attributer\Modules;

use Otomaties\Attributer\Modules\Abstracts\Module;

class Admin extends Module
{
    public function init()
    {
        // $this->loader->addAction('admin_enqueue_scripts', $this, 'enqueueScripts');
    }

    // public function enqueueScripts()
    // {
    //     if (property_exists($this->assets->entrypoints()->admin, 'js')) {
    //         foreach ($this->assets->entrypoints()->admin->js as $js) {
    //             wp_enqueue_script('otomaties-attributer-admin-' . $js, $this->assets->url($js), [], null, true);
    //         }
    //     }

    //     if (property_exists($this->assets->entrypoints()->admin, 'css')) {
    //         foreach ($this->assets->entrypoints()->admin->css as $css) {
    //             wp_enqueue_style('otomaties-attributer-admin-' . $css, $this->assets->url($css), [], null);
    //         }
    //     }
    // }
}
