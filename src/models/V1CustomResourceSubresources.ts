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
import V1CustomResourceSubresourceScale from './V1CustomResourceSubresourceScale'

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 * @export
 * @interface V1CustomResourceSubresources
 */
export default interface V1CustomResourceSubresources extends KubeObject {
  /**
   *
   * @type {V1CustomResourceSubresourceScale}
   * @memberof V1CustomResourceSubresources
   */
  scale?: V1CustomResourceSubresourceScale

  /**
   * status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.
   * @type {object}
   * @memberof V1CustomResourceSubresources
   */
  status?: object
}