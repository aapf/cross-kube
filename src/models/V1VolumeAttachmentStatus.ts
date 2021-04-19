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
import V1VolumeError from './V1VolumeError'

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 * @export
 * @interface V1VolumeAttachmentStatus
 */
export default interface V1VolumeAttachmentStatus extends KubeObject {
  /**
   *
   * @type {V1VolumeError}
   * @memberof V1VolumeAttachmentStatus
   */
  attachError?: V1VolumeError

  /**
   * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   * @type {boolean}
   * @memberof V1VolumeAttachmentStatus
   */
  attached: boolean

  /**
   * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   * @type {{ [key: string]: string; }}
   * @memberof V1VolumeAttachmentStatus
   */
  attachmentMetadata?: { [key: string]: string }

  /**
   *
   * @type {V1VolumeError}
   * @memberof V1VolumeAttachmentStatus
   */
  detachError?: V1VolumeError
}
