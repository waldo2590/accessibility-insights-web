// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { FeatureFlagDetail } from 'common/feature-flags';

export class UnifiedFeatureFlags {
    public static readonly logTelemetryToConsole = 'logTelemetryToConsole';
    public static readonly showAllFeatureFlags = 'showAllFeatureFlags';
    public static readonly exportReport = 'exportReport';
    public static readonly leftNavBar = 'leftNavBar';
}

export function getAllFeatureFlagDetailsUnified(): FeatureFlagDetail[] {
    return [
        {
            id: UnifiedFeatureFlags.logTelemetryToConsole,
            defaultValue: false,
            displayableName: 'Log telemetry to console',
            displayableDescription:
                'Write telemetry payload information to the developer tools console.',
            isPreviewFeature: false,
            forceDefault: false,
        },
        {
            id: UnifiedFeatureFlags.showAllFeatureFlags,
            defaultValue: false,
            displayableName: 'Show all feature flags',
            displayableDescription: 'Show all feature flags in the Preview Features panel.',
            isPreviewFeature: false,
            forceDefault: false,
        },
        {
            id: UnifiedFeatureFlags.exportReport,
            defaultValue: true,
            displayableName: 'Show export report button',
            displayableDescription: 'Show the export report button on the automated checks window',
            isPreviewFeature: false,
            forceDefault: true,
        },
        {
            id: UnifiedFeatureFlags.leftNavBar,
            defaultValue: false,
            displayableName: 'Show left navigation bar',
            displayableDescription: 'Show the left navigation bar in the automated checks window',
            isPreviewFeature: false,
            forceDefault: false,
        },
    ];
}
