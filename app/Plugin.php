<?php

namespace Otomaties\Attributer;

use Illuminate\Container\Container;
use Otomaties\Attributer\Helpers\Config;
use Otomaties\Attributer\Helpers\Loader;
use Otomaties\Attributer\Modules\Admin;
use Otomaties\Attributer\Modules\Frontend;

class Plugin extends Container
{
    private array $modules = [
        Frontend::class,
        Admin::class,
    ];

    public function __construct(
        private Loader $loader,
        private Config $config
    ) {}

    public function config(string $key): mixed
    {
        return $this->config->get($key);
    }

    public function initialize(): self
    {
        $this->loader->addAction('init', $this, 'loadTextDomain');

        $this->loadModules();

        return $this;
    }

    private function loadModules(): self
    {
        collect($this->modules)
            ->each(function ($className) {
                ($this->make($className))
                    ->init();
            });

        return $this;
    }

    public function loadTextDomain(): void
    {
        load_plugin_textdomain(
            'otomaties-attributer',
            false,
            basename($this->config('paths.base')) . '/resources/languages'
        );
    }

    public function getLoader(): Loader
    {
        return $this->loader;
    }

    public function runLoader(): void
    {
        apply_filters('otomaties_attributer_loader', $this->getLoader())
            ->run();
    }
}
