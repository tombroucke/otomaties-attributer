<?php

namespace Otomaties\Attributer\Models;

use Otomaties\Attributer\Models\Abstracts\Post;

class Book extends Post
{
    public static function postType(): string
    {
        return 'book';
    }
}
