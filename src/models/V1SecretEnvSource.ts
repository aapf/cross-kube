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

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.  The contents of the target Secret\'s Data field will represent the key-value pairs as environment variables.
 * @export
 * @interface V1SecretEnvSource
 */
export default interface V1SecretEnvSource extends KubeObject {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof V1SecretEnvSource
   */
  name?: string

  /**
   * Specify whether the Secret must be defined
   * @type {boolean}
   * @memberof V1SecretEnvSource
   */
  optional?: boolean
}
