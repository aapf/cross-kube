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

/**
 * AttachedVolume describes a volume attached to a node
 * @export
 * @interface V1AttachedVolume
 */
export default interface V1AttachedVolume extends KubeObject {
  /**
   * DevicePath represents the device path where the volume should be available
   * @type {string}
   * @memberof V1AttachedVolume
   */
  devicePath: string

  /**
   * Name of the attached volume
   * @type {string}
   * @memberof V1AttachedVolume
   */
  name: string
}