<?php
function getSchema()
{
    return [

        'galery' => [
            'menuName' => 'Фотографии',
            'fields' => [
                'title' => [
                    'name' => 'Название',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],
                'img' => [
                    'name' => 'Картинки для галереи',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],


    ];
}