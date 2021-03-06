// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { LeftNavItemKey } from 'electron/types/left-nav-item-key';

export type ContentPageInfo = {
    title: string;
    description: JSX.Element;
};

export type ContentPagesInfo = {
    [key in keyof LeftNavItemKey]: ContentPageInfo;
};
