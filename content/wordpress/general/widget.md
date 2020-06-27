---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/general/frontend-editor/'
next: '/wordpress/general/forms/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Widgets
A WordPress Widget is a small block that performs a specific function. Note that usually you should use directly the [sidebars](/wordpress/general/sidebar) where you can add multiple widgets from within the WordPress Dashboard.

This functionality is strictly usable outside of sidebars, and if you don't want to manage widgets from WordPress Dashboard.

Just add a div with the attributes:

<DynamicAttribute name="widget" value="widget class name" />

The widget class name are not so easy to be found, probably you will have to search inside the source code of the plugins to find them.
