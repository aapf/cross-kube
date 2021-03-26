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
import V1ListMeta from './V1ListMeta'
import V1StatusDetails from './V1StatusDetails'

/**
 * Status is a return value for calls that don\'t return other objects.
 * @export
 * @interface V1Status
 */
export default interface V1Status extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1Status
   */
  apiVersion?: string

  /**
   * Suggested HTTP return code for this status, 0 if not set.
   * @type {number}
   * @memberof V1Status
   */
  code?: number

  /**
   *
   * @type {V1StatusDetails}
   * @memberof V1Status
   */
  details?: V1StatusDetails

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1Status
   */
  kind?: string

  /**
   * A human-readable description of the status of this operation.
   * @type {string}
   * @memberof V1Status
   */
  message?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof V1Status
   */
  metadata?: V1ListMeta

  /**
   * A machine-readable description of why this operation is in the \"Failure\" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
   * @type {string}
   * @memberof V1Status
   */
  reason?: string

  /**
   * Status of the operation. One of: \"Success\" or \"Failure\". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   * @type {string}
   * @memberof V1Status
   */
  status?: string
}
