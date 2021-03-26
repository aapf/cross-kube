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
import V1alpha1VolumeError from './V1alpha1VolumeError'

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 * @export
 * @interface V1alpha1VolumeAttachmentStatus
 */
export default interface V1alpha1VolumeAttachmentStatus extends KubeObject {
  /**
   *
   * @type {V1alpha1VolumeError}
   * @memberof V1alpha1VolumeAttachmentStatus
   */
  attachError?: V1alpha1VolumeError

  /**
   * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   * @type {boolean}
   * @memberof V1alpha1VolumeAttachmentStatus
   */
  attached: boolean

  /**
   * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   * @type {{ [key: string]: string; }}
   * @memberof V1alpha1VolumeAttachmentStatus
   */
  attachmentMetadata?: { [key: string]: string }

  /**
   *
   * @type {V1alpha1VolumeError}
   * @memberof V1alpha1VolumeAttachmentStatus
   */
  detachError?: V1alpha1VolumeError
}
