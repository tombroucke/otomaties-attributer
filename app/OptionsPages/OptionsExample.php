<?php

namespace Otomaties\Attributer\OptionsPages;

use Otomaties\Attributer\OptionsPages\Abstracts\OptionsPage as AbstractsOptionsPage;
use Otomaties\Attributer\OptionsPages\Contracts\OptionsPage;
use StoutLogic\AcfBuilder\FieldsBuilder;

class OptionsExample extends AbstractsOptionsPage implements OptionsPage
{
    protected string $slug = 'otomaties-attributer-settings';

    protected string $title = 'Otomaties Attributer Settings';

    protected string $menuTitle = 'Otomaties Attributer Settings';

    public function __construct()
    {
        $this->title = __('Otomaties Attributer Settings', 'otomaties-attributer');
        $this->menuTitle = __('Otomaties Attributer Settings', 'otomaties-attributer');
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
