# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Base <a name="Base" id="cmstack-base-lib.Base"></a>

#### Initializers <a name="Initializers" id="cmstack-base-lib.Base.Initializer"></a>

```typescript
import { Base } from 'cmstack-base-lib'

new Base(scope: Construct, id: string, props?: BaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cmstack-base-lib.Base.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cmstack-base-lib.Base.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cmstack-base-lib.Base.Initializer.parameter.props">props</a></code> | <code><a href="#cmstack-base-lib.BaseProps">BaseProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cmstack-base-lib.Base.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cmstack-base-lib.Base.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cmstack-base-lib.Base.Initializer.parameter.props"></a>

- *Type:* <a href="#cmstack-base-lib.BaseProps">BaseProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cmstack-base-lib.Base.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cmstack-base-lib.Base.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cmstack-base-lib.Base.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cmstack-base-lib.Base.isConstruct"></a>

```typescript
import { Base } from 'cmstack-base-lib'

Base.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cmstack-base-lib.Base.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cmstack-base-lib.Base.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cmstack-base-lib.Base.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cmstack-base-lib.Base.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cmstack-base-lib.Base.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


## Structs <a name="Structs" id="Structs"></a>

### BaseProps <a name="BaseProps" id="cmstack-base-lib.BaseProps"></a>

#### Initializer <a name="Initializer" id="cmstack-base-lib.BaseProps.Initializer"></a>

```typescript
import { BaseProps } from 'cmstack-base-lib'

const baseProps: BaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cmstack-base-lib.BaseProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cmstack-base-lib.BaseProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---



