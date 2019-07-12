// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.14.4
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
   * Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
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