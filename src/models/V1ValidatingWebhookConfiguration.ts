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
import V1ValidatingWebhook from './V1ValidatingWebhook'

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 * @export
 * @interface V1ValidatingWebhookConfiguration
 */
export default interface V1ValidatingWebhookConfiguration extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1ValidatingWebhookConfiguration
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1ValidatingWebhookConfiguration
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1ValidatingWebhookConfiguration
   */
  metadata?: V1ObjectMeta

  /**
   * Webhooks is a list of webhooks and the affected resources and operations.
   * @type {Array<V1ValidatingWebhook>}
   * @memberof V1ValidatingWebhookConfiguration
   */
  webhooks?: Array<V1ValidatingWebhook>
}
