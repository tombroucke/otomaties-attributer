<?php

namespace Otomaties\Attributer\Modules;

use Otomaties\Attributer\Modules\Abstracts\Module;

class Frontend extends Module
{
    public function init()
    {
        $this->loader->addAction('wp_enqueue_scripts', $this, 'enqueueScripts');
        $this->loader->addFilter('gform_form_post_get_meta', $this, 'injectAttributorFields' );
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

    /**
     * Filter: gform_form_post_get_meta
     * @see https://docs.gravityforms.com/gform_form_post_get_meta/
     * 
     * @param array $form Form Object
     * @return array Form Object
     */
    public function injectAttributorFields( $form )
    {
        $form['fields'][] = \GF_Fields::create([
            'type' => 'hidden',
            'id' => 45678,
            'label' => 'Attributor - Medium',
            'formId' => $form['id'],
            'cssClass' => 'oto-attr__medium',
            'size' => 'large'
        ]);

        $form['fields'][] = \GF_Fields::create([
            'type' => 'hidden',
            'id' => 45679,
            'label' => 'Attributor - Request',
            'formId' => $form['id'],
            'cssClass' => 'oto-attr__request',
            'size' => 'large'
        ]);

        $form['fields'][] = \GF_Fields::create([
            'type' => 'hidden',
            'id' => 45680,
            'label' => 'Attributor - Referer',
            'formId' => $form['id'],
            'cssClass' => 'oto-attr__referer',
            'size' => 'large'
        ]);

        return $form;
    }
}
