/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.19
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { KubeObject } from '../runtime'
import V1VolumeProjection from './V1VolumeProjection'

/**
 * Represents a projected volume source
 * @export
 * @interface V1ProjectedVolumeSource
 */
export default interface V1ProjectedVolumeSource extends KubeObject {
  /**
   * Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @type {number}
   * @memberof V1ProjectedVolumeSource
   */
  defaultMode?: number

  /**
   * list of volume projections
   * @type {Array<V1VolumeProjection>}
   * @memberof V1ProjectedVolumeSource
   */
  sources: Array<V1VolumeProjection>
}
