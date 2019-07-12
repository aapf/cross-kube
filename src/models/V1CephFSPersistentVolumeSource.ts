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
import V1SecretReference from './V1SecretReference'

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1CephFSPersistentVolumeSource
 */
export default interface V1CephFSPersistentVolumeSource extends KubeObject {
  /**
   * Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @type {Array<string>}
   * @memberof V1CephFSPersistentVolumeSource
   */
  monitors: Array<string>

  /**
   * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
   * @type {string}
   * @memberof V1CephFSPersistentVolumeSource
   */
  path?: string

  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @type {boolean}
   * @memberof V1CephFSPersistentVolumeSource
   */
  readOnly?: boolean

  /**
   * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @type {string}
   * @memberof V1CephFSPersistentVolumeSource
   */
  secretFile?: string

  /**
   *
   * @type {V1SecretReference}
   * @memberof V1CephFSPersistentVolumeSource
   */
  secretRef?: V1SecretReference

  /**
   * Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @type {string}
   * @memberof V1CephFSPersistentVolumeSource
   */
  user?: string
}