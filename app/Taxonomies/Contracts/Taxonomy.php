<?php

namespace Otomaties\Attributer\Taxonomies\Contracts;

use ExtCPTs\Taxonomy as ExtCPTsTaxonomy;

interface Taxonomy
{
    public function register(): ExtCPTsTaxonomy;
}
