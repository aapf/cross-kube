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
import V1ObjectMeta from './V1ObjectMeta'
import V1VolumeAttachmentSpec from './V1VolumeAttachmentSpec'
import V1VolumeAttachmentStatus from './V1VolumeAttachmentStatus'

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.  VolumeAttachment objects are non-namespaced.
 * @export
 * @interface V1VolumeAttachment
 */
export default interface V1VolumeAttachment extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1VolumeAttachment
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1VolumeAttachment
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1VolumeAttachment
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1VolumeAttachmentSpec}
   * @memberof V1VolumeAttachment
   */
  spec: V1VolumeAttachmentSpec

  /**
   *
   * @type {V1VolumeAttachmentStatus}
   * @memberof V1VolumeAttachment
   */
  status?: V1VolumeAttachmentStatus
}
