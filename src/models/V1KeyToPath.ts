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

/**
 * Maps a string key to a path within a volume.
 * @export
 * @interface V1KeyToPath
 */
export default interface V1KeyToPath extends KubeObject {
  /**
   * The key to project.
   * @type {string}
   * @memberof V1KeyToPath
   */
  key: string

  /**
   * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @type {number}
   * @memberof V1KeyToPath
   */
  mode?: number

  /**
   * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element \'..\'. May not start with the string \'..\'.
   * @type {string}
   * @memberof V1KeyToPath
   */
  path: string
}
