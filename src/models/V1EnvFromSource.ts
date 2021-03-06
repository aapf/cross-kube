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
import V1ConfigMapEnvSource from './V1ConfigMapEnvSource'
import V1SecretEnvSource from './V1SecretEnvSource'

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 * @export
 * @interface V1EnvFromSource
 */
export default interface V1EnvFromSource extends KubeObject {
  /**
   *
   * @type {V1ConfigMapEnvSource}
   * @memberof V1EnvFromSource
   */
  configMapRef?: V1ConfigMapEnvSource

  /**
   * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
   * @type {string}
   * @memberof V1EnvFromSource
   */
  prefix?: string

  /**
   *
   * @type {V1SecretEnvSource}
   * @memberof V1EnvFromSource
   */
  secretRef?: V1SecretEnvSource
}
