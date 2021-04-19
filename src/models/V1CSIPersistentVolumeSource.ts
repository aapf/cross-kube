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
import V1SecretReference from './V1SecretReference'

/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 * @export
 * @interface V1CSIPersistentVolumeSource
 */
export default interface V1CSIPersistentVolumeSource extends KubeObject {
  /**
   *
   * @type {V1SecretReference}
   * @memberof V1CSIPersistentVolumeSource
   */
  controllerExpandSecretRef?: V1SecretReference

  /**
   *
   * @type {V1SecretReference}
   * @memberof V1CSIPersistentVolumeSource
   */
  controllerPublishSecretRef?: V1SecretReference

  /**
   * Driver is the name of the driver to use for this volume. Required.
   * @type {string}
   * @memberof V1CSIPersistentVolumeSource
   */
  driver: string

  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\".
   * @type {string}
   * @memberof V1CSIPersistentVolumeSource
   */
  fsType?: string

  /**
   *
   * @type {V1SecretReference}
   * @memberof V1CSIPersistentVolumeSource
   */
  nodePublishSecretRef?: V1SecretReference

  /**
   *
   * @type {V1SecretReference}
   * @memberof V1CSIPersistentVolumeSource
   */
  nodeStageSecretRef?: V1SecretReference

  /**
   * Optional: The value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
   * @type {boolean}
   * @memberof V1CSIPersistentVolumeSource
   */
  readOnly?: boolean

  /**
   * Attributes of the volume to publish.
   * @type {{ [key: string]: string; }}
   * @memberof V1CSIPersistentVolumeSource
   */
  volumeAttributes?: { [key: string]: string }

  /**
   * VolumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
   * @type {string}
   * @memberof V1CSIPersistentVolumeSource
   */
  volumeHandle: string
}
