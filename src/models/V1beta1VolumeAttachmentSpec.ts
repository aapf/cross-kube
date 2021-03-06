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
import V1beta1VolumeAttachmentSource from './V1beta1VolumeAttachmentSource'

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 * @export
 * @interface V1beta1VolumeAttachmentSpec
 */
export default interface V1beta1VolumeAttachmentSpec extends KubeObject {
  /**
   * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
   * @type {string}
   * @memberof V1beta1VolumeAttachmentSpec
   */
  attacher: string

  /**
   * The node that the volume should be attached to.
   * @type {string}
   * @memberof V1beta1VolumeAttachmentSpec
   */
  nodeName: string

  /**
   *
   * @type {V1beta1VolumeAttachmentSource}
   * @memberof V1beta1VolumeAttachmentSpec
   */
  source: V1beta1VolumeAttachmentSource
}
