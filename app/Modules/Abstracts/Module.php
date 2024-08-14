<?php

namespace Otomaties\Attributer\Modules\Abstracts;

use Otomaties\Attributer\Helpers\Assets;
use Otomaties\Attributer\Helpers\Loader;
use Otomaties\Attributer\Helpers\View;

abstract class Module
{
    public function __construct(
        protected Loader $loader,
        protected View $view,
        protected Assets $assets,
    ) {}

    abstract public function init();
}
