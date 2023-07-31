// k8s
package k8s


// MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
type KubeMutatingWebhookConfigurationListV1Beta1Props struct {
	// List of MutatingWebhookConfiguration.
	Items *[]*KubeMutatingWebhookConfigurationV1Beta1Props `field:"required" json:"items" yaml:"items"`
	// Standard list metadata.
	//
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	Metadata *ListMeta `field:"optional" json:"metadata" yaml:"metadata"`
}

