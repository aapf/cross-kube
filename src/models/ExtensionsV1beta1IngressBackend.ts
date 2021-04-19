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
import V1TypedLocalObjectReference from './V1TypedLocalObjectReference'

/**
 * IngressBackend describes all endpoints for a given service and port.
 * @export
 * @interface ExtensionsV1beta1IngressBackend
 */
export default interface ExtensionsV1beta1IngressBackend extends KubeObject {
  /**
   *
   * @type {V1TypedLocalObjectReference}
   * @memberof ExtensionsV1beta1IngressBackend
   */
  resource?: V1TypedLocalObjectReference

  /**
   * Specifies the name of the referenced service.
   * @type {string}
   * @memberof ExtensionsV1beta1IngressBackend
   */
  serviceName?: string

  /**
   * Specifies the port of the referenced service.
   * @type {object}
   * @memberof ExtensionsV1beta1IngressBackend
   */
  servicePort?: object
}
