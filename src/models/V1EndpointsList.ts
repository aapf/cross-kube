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
import V1Endpoints from './V1Endpoints'
import V1ListMeta from './V1ListMeta'

/**
 * EndpointsList is a list of endpoints.
 * @export
 * @interface V1EndpointsList
 */
export default interface V1EndpointsList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1EndpointsList
   */
  apiVersion?: string

  /**
   * List of endpoints.
   * @type {Array<V1Endpoints>}
   * @memberof V1EndpointsList
   */
  items: Array<V1Endpoints>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1EndpointsList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof V1EndpointsList
   */
  metadata?: V1ListMeta
}