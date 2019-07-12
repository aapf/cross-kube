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
import V1DownwardAPIVolumeFile from './V1DownwardAPIVolumeFile'

/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1DownwardAPIVolumeSource
 */
export default interface V1DownwardAPIVolumeSource extends KubeObject {
  /**
   * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @type {number}
   * @memberof V1DownwardAPIVolumeSource
   */
  defaultMode?: number

  /**
   * Items is a list of downward API volume file
   * @type {Array<V1DownwardAPIVolumeFile>}
   * @memberof V1DownwardAPIVolumeSource
   */
  items?: Array<V1DownwardAPIVolumeFile>
}