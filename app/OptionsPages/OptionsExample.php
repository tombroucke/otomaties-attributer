<?php

namespace Otomaties\Attributer\OptionsPages;

use Otomaties\Attributer\OptionsPages\Abstracts\OptionsPage as AbstractsOptionsPage;
use Otomaties\Attributer\OptionsPages\Contracts\OptionsPage;
use StoutLogic\AcfBuilder\FieldsBuilder;

class OptionsExample extends AbstractsOptionsPage implements OptionsPage
{
    protected string $slug = 'otomaties-attributer-settings';

    protected string $title = 'Plugin Boilerplate Settings';

    protected string $menuTitle = 'Plugin Boilerplate Settings';

    public function __construct()
    {
        $this->title = __('Plugin Boilerplate Settings', 'otomaties-attributer');
        $this->menuTitle = __('Plugin Boilerplate Settings', 'otomaties-attributer');
    }

    protected function fields(FieldsBuilder $fieldsBuilder): FieldsBuilder
    {
        $fieldsBuilder
            ->addText('foo', [
                'label' => __('Foo', 'otomaties-attributer'),
                'default_value' => 'bar',
            ]);

        return $fieldsBuilder;
    }
}
