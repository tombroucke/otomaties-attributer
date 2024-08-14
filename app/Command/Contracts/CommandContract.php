<?php

namespace Otomaties\Attributer\Command\Contracts;

interface CommandContract
{
    public function handle(array $args, array $assocArgs): void;
}
