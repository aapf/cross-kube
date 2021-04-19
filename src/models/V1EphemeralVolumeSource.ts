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
import V1PersistentVolumeClaimTemplate from './V1PersistentVolumeClaimTemplate'

/**
 * Represents an ephemeral volume that is handled by a normal storage driver.
 * @export
 * @interface V1EphemeralVolumeSource
 */
export default interface V1EphemeralVolumeSource extends KubeObject {
  /**
   * Specifies a read-only configuration for the volume. Defaults to false (read/write).
   * @type {boolean}
   * @memberof V1EphemeralVolumeSource
   */
  readOnly?: boolean

  /**
   *
   * @type {V1PersistentVolumeClaimTemplate}
   * @memberof V1EphemeralVolumeSource
   */
  volumeClaimTemplate?: V1PersistentVolumeClaimTemplate
}
