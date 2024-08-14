<?php

namespace Otomaties\Attributer\Helpers;

use Otomaties\Attributer\Exceptions\ViewNotFoundException;

class View
{
    private $path;

    public function __construct(string $path)
    {
        $this->path = rtrim($path, '/') . '/';
    }

    public function render(string $view, array $context = []): void
    {
        $view = $this->path . ltrim($view, '/') . '.php';
        if (! file_exists($view)) {
            throw new ViewNotFoundException('View not found: ' . $view);
        }

        extract($context, EXTR_SKIP);
        include apply_filters('otomaties_attributer_view', $view, $context);
    }

    public function return(string $view, array $context = []): string
    {
        ob_start();
        $this->render($view, $context);

        return ob_get_clean();
    }
}
