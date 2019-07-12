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
import V1LocalObjectReference from './V1LocalObjectReference'

/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 * @export
 * @interface V1ScaleIOVolumeSource
 */
export default interface V1ScaleIOVolumeSource extends KubeObject {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\".
   * @type {string}
   * @memberof V1ScaleIOVolumeSource
   */
  fsType?: string

  /**
   * The host address of the ScaleIO API Gateway.
   * @type {string}
   * @memberof V1ScaleIOVolumeSource
   */
  gateway: string

  /**
   * The name of the ScaleIO Protection Domain for the configured storage.
   * @type {string}
   * @memberof V1ScaleIOVolumeSource
   */
  protectionDomain?: string

  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @type {boolean}
   * @memberof V1ScaleIOVolumeSource
   */
  readOnly?: boolean

  /**
   *
   * @type {V1LocalObjectReference}
   * @memberof V1ScaleIOVolumeSource
   */
  secretRef: V1LocalObjectReference

  /**
   * Flag to enable/disable SSL communication with Gateway, default false
   * @type {boolean}
   * @memberof V1ScaleIOVolumeSource
   */
  sslEnabled?: boolean

  /**
   * Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
   * @type {string}
   * @memberof V1ScaleIOVolumeSource
   */
  storageMode?: string

  /**
   * The ScaleIO Storage Pool associated with the protection domain.
   * @type {string}
   * @memberof V1ScaleIOVolumeSource
   */
  storagePool?: string

  /**
   * The name of the storage system as configured in ScaleIO.
   * @type {string}
   * @memberof V1ScaleIOVolumeSource
   */
  system: string

  /**
   * The name of a volume already created in the ScaleIO system that is associated with this volume source.
   * @type {string}
   * @memberof V1ScaleIOVolumeSource
   */
  volumeName?: string
}