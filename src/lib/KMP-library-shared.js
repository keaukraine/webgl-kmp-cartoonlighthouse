(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './KMP-library-engine.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./KMP-library-engine.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'org.androidworks.engine:shared'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'org.androidworks.engine:shared'.");
    }
    if (typeof this['KMP-library-engine'] === 'undefined') {
      throw new Error("Error loading module 'org.androidworks.engine:shared'. Its dependency 'KMP-library-engine' was not found. Please, check whether 'KMP-library-engine' is loaded prior to 'org.androidworks.engine:shared'.");
    }
    root['org.androidworks.engine:shared'] = factory(typeof this['org.androidworks.engine:shared'] === 'undefined' ? {} : this['org.androidworks.engine:shared'], this['kotlin-kotlin-stdlib'], this['KMP-library-engine']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_androidworks_engine_engine) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.d1;
  var classMeta = kotlin_kotlin.$_$.r;
  var setMetadataFor = kotlin_kotlin.$_$.e1;
  var VOID = kotlin_kotlin.$_$.b;
  var Vec3 = kotlin_org_androidworks_engine_engine.$_$.q2;
  var TextureAnimationChunked = kotlin_org_androidworks_engine_engine.$_$.x1;
  var objectMeta = kotlin_kotlin.$_$.c1;
  var CameraPosition = kotlin_org_androidworks_engine_engine.$_$.a2;
  var CameraPositionPair = kotlin_org_androidworks_engine_engine.$_$.z1;
  var getBooleanHashCode = kotlin_kotlin.$_$.v;
  var THROW_CCE = kotlin_kotlin.$_$.i1;
  var Vec4 = kotlin_org_androidworks_engine_engine.$_$.r2;
  var AttributeType_VERTEX_getInstance = kotlin_org_androidworks_engine_engine.$_$.o;
  var VertexFormat_HALF3_getInstance = kotlin_org_androidworks_engine_engine.$_$.j1;
  var MeshAttribute = kotlin_org_androidworks_engine_engine.$_$.a3;
  var AttributeType_U0_getInstance = kotlin_org_androidworks_engine_engine.$_$.m;
  var VertexFormat_HALF_getInstance = kotlin_org_androidworks_engine_engine.$_$.k1;
  var listOf = kotlin_kotlin.$_$.n;
  var MeshAttributes = kotlin_org_androidworks_engine_engine.$_$.z2;
  var VertexFormat_FLOAT3_getInstance = kotlin_org_androidworks_engine_engine.$_$.h1;
  var AttributeType_UV0_getInstance = kotlin_org_androidworks_engine_engine.$_$.n;
  var VertexFormat_HALF2_getInstance = kotlin_org_androidworks_engine_engine.$_$.i1;
  var listOf_0 = kotlin_kotlin.$_$.m;
  var VertexFormat_UBYTE_NORMALIZED_getInstance = kotlin_org_androidworks_engine_engine.$_$.m1;
  var VertexFormat_FLOAT2_getInstance = kotlin_org_androidworks_engine_engine.$_$.g1;
  var MeshConstructor2 = kotlin_org_androidworks_engine_engine.$_$.s1;
  var mutableListOf = kotlin_kotlin.$_$.p;
  var setUniform = kotlin_org_androidworks_engine_engine.$_$.m3;
  var setUniform_0 = kotlin_org_androidworks_engine_engine.$_$.k3;
  var setUniform_1 = kotlin_org_androidworks_engine_engine.$_$.i3;
  var List = kotlin_kotlin.$_$.j;
  var isInterface = kotlin_kotlin.$_$.z;
  var Unit_instance = kotlin_kotlin.$_$.i;
  var setUniform_2 = kotlin_org_androidworks_engine_engine.$_$.j3;
  var ensureNotNull = kotlin_kotlin.$_$.k1;
  var Scene = kotlin_org_androidworks_engine_engine.$_$.b3;
  var TimersMap = kotlin_org_androidworks_engine_engine.$_$.s2;
  var get_HINT_VRS_4X4 = kotlin_org_androidworks_engine_engine.$_$.m2;
  var UniformTextureValue = kotlin_org_androidworks_engine_engine.$_$.f3;
  var CameraPathAnimator = kotlin_org_androidworks_engine_engine.$_$.y1;
  var ClearColorCommand = kotlin_org_androidworks_engine_engine.$_$.d2;
  var get_BLENDING_NONE = kotlin_org_androidworks_engine_engine.$_$.v2;
  var get_DEPTH_TEST_ENABLED = kotlin_org_androidworks_engine_engine.$_$.y2;
  var CullFace_BACK_getInstance = kotlin_org_androidworks_engine_engine.$_$.s;
  var VertexAttribute = kotlin_org_androidworks_engine_engine.$_$.h3;
  var VertexAttributesDescriptor = kotlin_org_androidworks_engine_engine.$_$.g3;
  var DrawMeshState = kotlin_org_androidworks_engine_engine.$_$.i2;
  var AffineTranformation = kotlin_org_androidworks_engine_engine.$_$.b2;
  var UniformFloatValueWithArray = kotlin_org_androidworks_engine_engine.$_$.t1;
  var DrawStaticMeshCommandConstructor = kotlin_org_androidworks_engine_engine.$_$.o1;
  var GroupCommand = kotlin_org_androidworks_engine_engine.$_$.k2;
  var DrawTransformedMeshCommand = kotlin_org_androidworks_engine_engine.$_$.j2;
  var UniformIntValueWithArray = kotlin_org_androidworks_engine_engine.$_$.u1;
  var GroupCommandArr = kotlin_org_androidworks_engine_engine.$_$.p1;
  var ClearCommand = kotlin_org_androidworks_engine_engine.$_$.e2;
  var ClearCommandClearType_COLOR_AND_DEPTH_getInstance = kotlin_org_androidworks_engine_engine.$_$.f;
  var VignetteCommand = kotlin_org_androidworks_engine_engine.$_$.p2;
  var MainPassCommandArr = kotlin_org_androidworks_engine_engine.$_$.q1;
  var BlurredPassCommand = kotlin_org_androidworks_engine_engine.$_$.c2;
  var BlurSize_KERNEL_4_getInstance = kotlin_org_androidworks_engine_engine.$_$.d;
  var DrawBlurredCommand = kotlin_org_androidworks_engine_engine.$_$.g2;
  var Default_getInstance = kotlin_kotlin.$_$.h;
  var Matrix_getInstance = kotlin_org_androidworks_engine_engine.$_$.w1;
  var CameraState_TRANSITIONING_getInstance = kotlin_org_androidworks_engine_engine.$_$.a;
  var Spline3D_init_$Create$ = kotlin_org_androidworks_engine_engine.$_$.n1;
  var THROW_IAE = kotlin_kotlin.$_$.j1;
  var Enum = kotlin_kotlin.$_$.h1;
  var defineProp = kotlin_kotlin.$_$.s;
  var Shader = kotlin_org_androidworks_engine_engine.$_$.c3;
  var Texture = kotlin_org_androidworks_engine_engine.$_$.d3;
  var TextureFormat_RGBA8_getInstance = kotlin_org_androidworks_engine_engine.$_$.b1;
  var TextureFiltering_NEAREST_getInstance = kotlin_org_androidworks_engine_engine.$_$.y;
  var TextureWrapping_CLAMP_TO_EDGE_getInstance = kotlin_org_androidworks_engine_engine.$_$.d1;
  var TextureFiltering_LINEAR_getInstance = kotlin_org_androidworks_engine_engine.$_$.x;
  var TextureFormat_ASTC_getInstance = kotlin_org_androidworks_engine_engine.$_$.z;
  var TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance = kotlin_org_androidworks_engine_engine.$_$.v;
  var TextureFormat_RGBA16F_getInstance = kotlin_org_androidworks_engine_engine.$_$.a1;
  var Command = kotlin_org_androidworks_engine_engine.$_$.f2;
  var CommandType_CUSTOM_getInstance = kotlin_org_androidworks_engine_engine.$_$.g;
  var get_HINT_VRS_NONE = kotlin_org_androidworks_engine_engine.$_$.n2;
  var ColorMode_Normal_getInstance = kotlin_org_androidworks_engine_engine.$_$.j;
  var MeshConstructor1 = kotlin_org_androidworks_engine_engine.$_$.r1;
  var BlurSize_KERNEL_5_getInstance = kotlin_org_androidworks_engine_engine.$_$.e;
  var Blending = kotlin_org_androidworks_engine_engine.$_$.w2;
  var BlendingEquation_ADD_getInstance = kotlin_org_androidworks_engine_engine.$_$.p;
  var BlendingFactor_ONE_getInstance = kotlin_org_androidworks_engine_engine.$_$.q;
  var BlurSize_KERNEL_3_getInstance = kotlin_org_androidworks_engine_engine.$_$.c;
  var get_HINT_VRS_2X2 = kotlin_org_androidworks_engine_engine.$_$.l2;
  var ColorMode_Sepia_getInstance = kotlin_org_androidworks_engine_engine.$_$.k;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var BlurSize_KERNEL_2_getInstance = kotlin_org_androidworks_engine_engine.$_$.b;
  var setUniform_3 = kotlin_org_androidworks_engine_engine.$_$.n3;
  var MathUtils_instance = kotlin_org_androidworks_engine_engine.$_$.v1;
  var setUniform_4 = kotlin_org_androidworks_engine_engine.$_$.l3;
  var OrbitingCameraConfig = kotlin_org_androidworks_engine_engine.$_$.t2;
  var OrbitingCamera = kotlin_org_androidworks_engine_engine.$_$.u2;
  var CullFace_DISABLED_getInstance = kotlin_org_androidworks_engine_engine.$_$.t;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c;
  var copyToArray = kotlin_kotlin.$_$.l;
  var get_DEPTH_NO_WRITE = kotlin_org_androidworks_engine_engine.$_$.x2;
  var PrimitiveDrawType_NON_INDEXED_getInstance = kotlin_org_androidworks_engine_engine.$_$.h;
  var getStringHashCode = kotlin_kotlin.$_$.x;
  var TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance = kotlin_org_androidworks_engine_engine.$_$.w;
  var TextureWrapping_REPEAT_getInstance = kotlin_org_androidworks_engine_engine.$_$.e1;
  var AttributeType_NORMAL_getInstance = kotlin_org_androidworks_engine_engine.$_$.l;
  var CullFace_FRONT_getInstance = kotlin_org_androidworks_engine_engine.$_$.u;
  var BlendingFactor_SRC_ALPHA_getInstance = kotlin_org_androidworks_engine_engine.$_$.r;
  var objectCreate = kotlin_kotlin.$_$.b1;
  var fillArrayVal = kotlin_kotlin.$_$.u;
  var to = kotlin_kotlin.$_$.l1;
  var mapOf = kotlin_kotlin.$_$.o;
  var NoopCommand = kotlin_org_androidworks_engine_engine.$_$.o2;
  var DrawMeshCommand = kotlin_org_androidworks_engine_engine.$_$.h2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.d;
  var UniformFloatValue = kotlin_org_androidworks_engine_engine.$_$.e3;
  var get_PI = kotlin_kotlin.$_$.g1;
  var VertexFormat_UBYTE2_NORMALIZED_getInstance = kotlin_org_androidworks_engine_engine.$_$.l1;
  var VertexFormat_BYTE2_NORMALIZED_getInstance = kotlin_org_androidworks_engine_engine.$_$.f1;
  var PrimitiveType_POINTS_getInstance = kotlin_org_androidworks_engine_engine.$_$.i;
  var setUniform_5 = kotlin_org_androidworks_engine_engine.$_$.o3;
  var TextureType_CUBEMAP_getInstance = kotlin_org_androidworks_engine_engine.$_$.c1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AnimatedObjectInfoBase, 'AnimatedObjectInfoBase', classMeta, VOID, VOID, AnimatedObjectInfoBase);
  setMetadataFor(AnimatedObjectInfo, 'AnimatedObjectInfo', classMeta, AnimatedObjectInfoBase, VOID, AnimatedObjectInfo);
  setMetadataFor(SplineAnimatedObjectInfo, 'SplineAnimatedObjectInfo', classMeta, AnimatedObjectInfoBase, VOID, SplineAnimatedObjectInfo);
  setMetadataFor(Animations, 'Animations', objectMeta);
  setMetadataFor(Cameras, 'Cameras', objectMeta);
  setMetadataFor(SceneColors, 'SceneColors', classMeta);
  setMetadataFor(Colors, 'Colors', objectMeta);
  setMetadataFor(Meshes, 'Meshes', objectMeta);
  setMetadataFor(Penguins, 'Penguins', objectMeta);
  setMetadataFor(ArcticScene, 'ArcticScene', classMeta, Scene, VOID, ArcticScene);
  setMetadataFor(Seals, 'Seals', objectMeta);
  setMetadataFor(TimeOfDay, 'TimeOfDay', classMeta, Enum);
  setMetadataFor(ArcticSettings, 'ArcticSettings', classMeta, VOID, VOID, ArcticSettings);
  setMetadataFor(Shaders, 'Shaders', objectMeta);
  setMetadataFor(ShipConfig, 'ShipConfig', classMeta);
  setMetadataFor(ShipsConfig, 'ShipsConfig', objectMeta);
  setMetadataFor(Textures, 'Textures', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Timers, 'Timers', classMeta, Enum);
  setMetadataFor(Cameras_0, 'Cameras', objectMeta);
  setMetadataFor(DrawClockCommand, 'DrawClockCommand', classMeta, Command, VOID, DrawClockCommand);
  setMetadataFor(BrutalismScene, 'BrutalismScene', classMeta, Scene, VOID, BrutalismScene);
  setMetadataFor(BrutalismSettings, 'BrutalismSettings', classMeta, VOID, VOID, BrutalismSettings);
  setMetadataFor(Cameras_1, 'Cameras', objectMeta);
  setMetadataFor(Meshes_0, 'Meshes', objectMeta);
  setMetadataFor(Preset, 'Preset', classMeta, VOID, VOID, Preset);
  setMetadataFor(Presets, 'Presets', objectMeta);
  setMetadataFor(CartoonLighthouseScene, 'CartoonLighthouseScene', classMeta, Scene, VOID, CartoonLighthouseScene);
  setMetadataFor(TimeOfDay_0, 'TimeOfDay', classMeta, Enum);
  setMetadataFor(CameraMode, 'CameraMode', classMeta, Enum);
  setMetadataFor(CartoonLighthouseSettings, 'CartoonLighthouseSettings', classMeta, VOID, VOID, CartoonLighthouseSettings);
  setMetadataFor(Shaders_0, 'Shaders', objectMeta);
  setMetadataFor(SimpleTexture, 'SimpleTexture', classMeta);
  setMetadataFor(Textures_0, 'Textures', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Timers_0, 'Timers', classMeta, Enum);
  setMetadataFor(Meshes_1, 'Meshes', objectMeta);
  setMetadataFor(Props, 'Props', objectMeta);
  setMetadataFor(CartoonPlanesScene, 'CartoonPlanesScene', classMeta, Scene, VOID, CartoonPlanesScene);
  setMetadataFor(TimeOfDay_1, 'TimeOfDay', classMeta, Enum);
  setMetadataFor(CartoonPlanesSettings, 'CartoonPlanesSettings', classMeta, VOID, VOID, CartoonPlanesSettings);
  setMetadataFor(Shaders_1, 'Shaders', objectMeta);
  setMetadataFor(Textures_1, 'Textures', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Timers_1, 'Timers', classMeta, Enum);
  setMetadataFor(Cameras_2, 'Cameras', objectMeta);
  setMetadataFor(InteractiveCameraPositionPair, 'InteractiveCameraPositionPair', classMeta, CameraPositionPair);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ExampleScene, 'ExampleScene', classMeta, Scene, VOID, ExampleScene);
  setMetadataFor(Timers_2, 'Timers', classMeta, Enum);
  setMetadataFor(Cameras_3, 'Cameras', objectMeta);
  setMetadataFor(Meshes_2, 'Meshes', objectMeta);
  setMetadataFor(SkyscrapersScene, 'SkyscrapersScene', classMeta, Scene, VOID, SkyscrapersScene);
  setMetadataFor(SkyscrapersSettings, 'SkyscrapersSettings', classMeta, VOID, VOID, SkyscrapersSettings);
  setMetadataFor(Shaders_2, 'Shaders', objectMeta);
  setMetadataFor(Textures_2, 'Textures', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Timers_3, 'Timers', classMeta, Enum);
  //endregion
  function AnimatedObjectInfoBase() {
    this.dj_1 = 0.0;
    this.ej_1 = 0.0;
  }
  function AnimatedObjectInfo() {
    AnimatedObjectInfoBase.call(this);
    this.hj_1 = new Vec3();
    this.ij_1 = new Vec3();
  }
  function SplineAnimatedObjectInfo() {
    AnimatedObjectInfoBase.call(this);
    this.lj_1 = null;
  }
  function Animations() {
    Animations_instance = this;
    this.mj_1 = new TextureAnimationChunked(133, 133, 3);
    this.nj_1 = new TextureAnimationChunked(341, 341, 15);
    this.oj_1 = new TextureAnimationChunked(238, 238, 10);
    this.pj_1 = new TextureAnimationChunked(263, 263, 9);
    this.qj_1 = new TextureAnimationChunked(263, 263, 12);
  }
  var Animations_instance;
  function Animations_getInstance() {
    if (Animations_instance == null)
      new Animations();
    return Animations_instance;
  }
  function Cameras() {
    Cameras_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.rj_1 = [new CameraPositionPair(new CameraPosition(new Vec3(-20834.791, 47426.33, 2531.646), new Vec3(-25922.844, 23601.791, 886.872)), new CameraPosition(new Vec3(10194.038, -1464.044, 886.872), new Vec3(918.405, -14209.802, 886.872)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-4109.569, 11284.58, 2531.646), new Vec3(-26652.816, 1825.736, 886.872)), new CameraPosition(new Vec3(4167.435, 9801.106, 886.872), new Vec3(20338.879, -12121.901, 886.872)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-1316.869, -26605.557, 730.833), new Vec3(7972.117, -8640.933, 156.916)), new CameraPosition(new Vec3(5633.813, -2835.024, 590.909), new Vec3(7054.362, -11628.732, 156.916)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(1058.602, -6343.349, 7252.608), new Vec3(12343.629, -9785.771, 156.916)), new CameraPosition(new Vec3(10627.578, -5523.65, 952.352), new Vec3(7975.851, -12773.571, 156.916)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-15084.583, -6685.166, 1734.204), new Vec3(-7877.742, -11902.989, 156.916)), new CameraPosition(new Vec3(-5300.519, -8189.871, 2864.12), new Vec3(-14072.867, -12477.64, 156.916)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-12847.906, 6333.75, 388.651), new Vec3(-9402.603, 9611.532, 156.916)), new CameraPosition(new Vec3(-7762.645, 7800.965, 3749.253), new Vec3(-11462.321, 8195.902, 156.916)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-22389.021, 1075.924, 5119.1), new Vec3(-6829.5, 16726.61, 3154.788)), new CameraPosition(new Vec3(-23767.002, 14537.841, 5001.777), new Vec3(1434.719, 1224.992, 4490.559)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-35127.016, 27564.738, 886.872), new Vec3(-7923.539, 14634.557, 886.872)), new CameraPosition(new Vec3(-24081.432, -14828.664, 886.872), new Vec3(-7150.61, -5201.194, 886.872)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-26917.791, 18527.285, 3173.479), new Vec3(-19059.227, 11528.038, 886.872)), new CameraPosition(new Vec3(1437.67, 4945.704, 571.601), new Vec3(6268.789, -4323.603, 886.872)), 1.0)];
  }
  var Cameras_instance;
  function Cameras_getInstance() {
    if (Cameras_instance == null)
      new Cameras();
    return Cameras_instance;
  }
  function SceneColors(isDay, isLowSun, drawBirds, birds, clouds, stars, waterColorNear, waterColorFar, distantZFogColor) {
    this.sj_1 = isDay;
    this.tj_1 = isLowSun;
    this.uj_1 = drawBirds;
    this.vj_1 = birds;
    this.wj_1 = clouds;
    this.xj_1 = stars;
    this.yj_1 = waterColorNear;
    this.zj_1 = waterColorFar;
    this.ak_1 = distantZFogColor;
  }
  protoOf(SceneColors).toString = function () {
    return 'SceneColors(isDay=' + this.sj_1 + ', isLowSun=' + this.tj_1 + ', drawBirds=' + this.uj_1 + ', birds=' + this.vj_1 + ', clouds=' + this.wj_1 + ', stars=' + this.xj_1 + ', waterColorNear=' + this.yj_1 + ', waterColorFar=' + this.zj_1 + ', distantZFogColor=' + this.ak_1 + ')';
  };
  protoOf(SceneColors).hashCode = function () {
    var result = getBooleanHashCode(this.sj_1);
    result = imul(result, 31) + getBooleanHashCode(this.tj_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.uj_1) | 0;
    result = imul(result, 31) + this.vj_1.hashCode() | 0;
    result = imul(result, 31) + this.wj_1.hashCode() | 0;
    result = imul(result, 31) + this.xj_1.hashCode() | 0;
    result = imul(result, 31) + this.yj_1.hashCode() | 0;
    result = imul(result, 31) + this.zj_1.hashCode() | 0;
    result = imul(result, 31) + this.ak_1.hashCode() | 0;
    return result;
  };
  protoOf(SceneColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SceneColors))
      return false;
    var tmp0_other_with_cast = other instanceof SceneColors ? other : THROW_CCE();
    if (!(this.sj_1 === tmp0_other_with_cast.sj_1))
      return false;
    if (!(this.tj_1 === tmp0_other_with_cast.tj_1))
      return false;
    if (!(this.uj_1 === tmp0_other_with_cast.uj_1))
      return false;
    if (!this.vj_1.equals(tmp0_other_with_cast.vj_1))
      return false;
    if (!this.wj_1.equals(tmp0_other_with_cast.wj_1))
      return false;
    if (!this.xj_1.equals(tmp0_other_with_cast.xj_1))
      return false;
    if (!this.yj_1.equals(tmp0_other_with_cast.yj_1))
      return false;
    if (!this.zj_1.equals(tmp0_other_with_cast.zj_1))
      return false;
    if (!this.ak_1.equals(tmp0_other_with_cast.ak_1))
      return false;
    return true;
  };
  function Colors() {
    Colors_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.bk_1 = [new SceneColors(true, false, true, new Vec4(0.3137254901960784, 0.3137254901960784, 0.3137254901960784, 1.0), new Vec4(0.8666666666666667, 0.9725490196078431, 1.0, 0.3), new Vec4(0.8666666666666667, 0.9725490196078431, 1.0, 0.3), new Vec4(0.21568627450980393, 0.6313725490196078, 0.8274509803921568), new Vec4(0.5137254901960784, 0.8352941176470589, 0.8901960784313725), new Vec4(1.0, 1.0, 1.0, 0.75)), new SceneColors(false, false, false, new Vec4(1.0, 0.0, 0.0, 1.0), new Vec4(0.058823529411764705, 0.2627450980392157, 0.3843137254901961, 0.3), new Vec4(1.0, 1.0, 1.0, 1.0), new Vec4(0.03529411764705882, 0.17254901960784313, 0.3215686274509804), new Vec4(0.043137254901960784, 0.12156862745098039, 0.2196078431372549), new Vec4(0.2627450980392157, 0.4823529411764706, 0.611764705882353, 0.75)), new SceneColors(true, true, true, new Vec4(0.49411764705882355, 0.42745098039215684, 0.26666666666666666, 1.0), new Vec4(0.9294117647058824, 0.7490196078431373, 0.38823529411764707, 0.3), new Vec4(0.8666666666666667, 0.9725490196078431, 1.0, 0.3), new Vec4(0.592156862745098, 0.6313725490196078, 0.5098039215686274), new Vec4(0.8509803921568627, 0.7333333333333333, 0.5372549019607843), new Vec4(0.8980392156862745, 0.8745098039215686, 0.7137254901960784, 0.75)), new SceneColors(true, true, false, new Vec4(0.3686274509803922, 0.17647058823529413, 0.20784313725490197, 1.0), new Vec4(0.4549019607843137, 0.2784313725490196, 0.5019607843137255, 0.3), new Vec4(1.0, 1.0, 1.0, 1.0), new Vec4(0.0784313725490196, 0.20784313725490197, 0.4549019607843137), new Vec4(0.25882352941176473, 0.24313725490196078, 0.5098039215686274), new Vec4(0.8823529411764706, 0.6745098039215687, 0.8392156862745098, 0.75))];
  }
  var Colors_instance;
  function Colors_getInstance() {
    if (Colors_instance == null)
      new Colors();
    return Colors_instance;
  }
  function Meshes() {
    Meshes_instance = this;
    this.ck_1 = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0), new MeshAttribute(AttributeType_U0_getInstance(), VertexFormat_HALF_getInstance(), 6)]), 8);
    this.dk_1 = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_FLOAT3_getInstance(), 0), new MeshAttribute(AttributeType_UV0_getInstance(), VertexFormat_HALF2_getInstance(), 12)]), 16);
    this.ek_1 = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0), new MeshAttribute(AttributeType_UV0_getInstance(), VertexFormat_HALF2_getInstance(), 6)]), 12);
    this.fk_1 = new MeshAttributes(listOf_0(new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0)), 8);
    this.gk_1 = new MeshAttributes(listOf_0(new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_FLOAT3_getInstance(), 0)), 12);
    this.hk_1 = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_FLOAT3_getInstance(), 0), new MeshAttribute(AttributeType_U0_getInstance(), VertexFormat_UBYTE_NORMALIZED_getInstance(), 12)]), 16);
    this.ik_1 = new MeshAttributes(listOf_0(new MeshAttribute(AttributeType_UV0_getInstance(), VertexFormat_FLOAT2_getInstance(), 0)), 4);
    this.jk_1 = MeshConstructor2('mountains1', this.ck_1);
    this.kk_1 = MeshConstructor2('mountains_distant1', this.ck_1);
    this.lk_1 = MeshConstructor2('sun', this.dk_1);
    this.mk_1 = MeshConstructor2('sun2', this.dk_1);
    this.nk_1 = MeshConstructor2('water_test', this.ek_1);
    this.ok_1 = MeshConstructor2('sky', this.dk_1);
    this.pk_1 = MeshConstructor2('stars', this.gk_1);
    this.qk_1 = MeshConstructor2('clouds', this.hk_1);
    this.rk_1 = MeshConstructor2('bird1');
    this.sk_1 = MeshConstructor2('ship', this.ck_1);
    this.tk_1 = MeshConstructor2('penguin-idle', this.ik_1);
    this.uk_1 = MeshConstructor2('penguin-idle2', this.ik_1);
    this.vk_1 = MeshConstructor2('seal-idle', this.ik_1);
    this.wk_1 = MeshConstructor2('animals_sleeping', this.dk_1);
    this.xk_1 = mutableListOf([this.lk_1, this.mk_1, this.jk_1, this.kk_1, this.nk_1, this.ok_1, this.pk_1, this.qk_1, this.rk_1, this.sk_1, this.tk_1, this.uk_1, this.vk_1, this.wk_1]);
  }
  var Meshes_instance;
  function Meshes_getInstance() {
    if (Meshes_instance == null)
      new Meshes();
    return Meshes_instance;
  }
  function Penguins() {
    Penguins_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.apply' call
    var this_0 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE.<anonymous>' call
    this_0.hj_1 = new Vec3(-10793.156, 7192.894, 37.26);
    this_0.ij_1 = new Vec3(0.0, 0.0, -160.0);
    this_0.dj_1 = 0.88;
    this_0.ej_1 = 0.5;
    var tmp_0 = this_0;
    // Inline function 'kotlin.apply' call
    var this_1 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE.<anonymous>' call
    this_1.hj_1 = new Vec3(-10851.307, 7243.238, 37.26);
    this_1.ij_1 = new Vec3(0.0, 0.0, 70.0);
    this_1.dj_1 = 0.75;
    this_1.ej_1 = 0.25;
    var tmp_1 = this_1;
    // Inline function 'kotlin.apply' call
    var this_2 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE.<anonymous>' call
    this_2.hj_1 = new Vec3(-10762.938, 7258.693, 37.26);
    this_2.ij_1 = new Vec3(0.0, 0.0, 0.0);
    this_2.dj_1 = 0.65;
    this_2.ej_1 = 0.77;
    var tmp_2 = this_2;
    // Inline function 'kotlin.apply' call
    var this_3 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE.<anonymous>' call
    this_3.hj_1 = new Vec3(-10280.157, 8529.577, 69.556);
    this_3.ij_1 = new Vec3(0.0, 0.0, -20.0);
    this_3.dj_1 = 0.65;
    this_3.ej_1 = 0.2;
    var tmp_3 = this_3;
    // Inline function 'kotlin.apply' call
    var this_4 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE.<anonymous>' call
    this_4.hj_1 = new Vec3(-10359.45, 8782.093, 69.556);
    this_4.ij_1 = new Vec3(0.0, 0.0, 70.0);
    this_4.dj_1 = 0.77;
    this_4.ej_1 = 0.35;
    var tmp_4 = this_4;
    // Inline function 'kotlin.apply' call
    var this_5 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE.<anonymous>' call
    this_5.hj_1 = new Vec3(-10081.696, 8657.917, 69.556);
    this_5.ij_1 = new Vec3(0.0, 0.0, -160.0);
    this_5.dj_1 = 0.85;
    this_5.ej_1 = 0.75;
    var tmp_5 = this_5;
    // Inline function 'kotlin.apply' call
    var this_6 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE.<anonymous>' call
    this_6.hj_1 = new Vec3(-10150.821, 9009.801, 69.556);
    this_6.ij_1 = new Vec3(0.0, 0.0, 130.0);
    this_6.dj_1 = 0.7;
    this_6.ej_1 = 0.66;
    var tmp_6 = this_6;
    // Inline function 'kotlin.apply' call
    var this_7 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE.<anonymous>' call
    this_7.hj_1 = new Vec3(-10006.514, 8820.707, 69.556);
    this_7.ij_1 = new Vec3(0.0, 0.0, -90.0);
    this_7.dj_1 = 0.8;
    this_7.ej_1 = 0.8;
    var tmp_7 = this_7;
    // Inline function 'kotlin.apply' call
    var this_8 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE.<anonymous>' call
    this_8.hj_1 = new Vec3(-9890.24, 8932.688, 69.556);
    this_8.ij_1 = new Vec3(0.0, 0.0, 140.0);
    this_8.dj_1 = 0.85;
    this_8.ej_1 = 0.5;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.yk_1 = [tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, this_8];
    var tmp_8 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.apply' call
    var this_9 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE2.<anonymous>' call
    this_9.hj_1 = new Vec3(-12338.941, 6764.751, 33.536);
    this_9.ij_1 = new Vec3(0.0, 0.0, 180.0);
    this_9.dj_1 = 0.9;
    this_9.ej_1 = 0.2;
    var tmp_9 = this_9;
    // Inline function 'kotlin.apply' call
    var this_10 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE2.<anonymous>' call
    this_10.hj_1 = new Vec3(-12192.411, 6887.637, 33.536);
    this_10.ij_1 = new Vec3(0.0, 0.0, -135.0);
    this_10.dj_1 = 0.8;
    this_10.ej_1 = 0.33;
    var tmp_10 = this_10;
    // Inline function 'kotlin.apply' call
    var this_11 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE2.<anonymous>' call
    this_11.hj_1 = new Vec3(-12480.681, 6825.791, 33.536);
    this_11.ij_1 = new Vec3(0.0, 0.0, 160.0);
    this_11.dj_1 = 0.75;
    this_11.ej_1 = 0.5;
    var tmp_11 = this_11;
    // Inline function 'kotlin.apply' call
    var this_12 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE2.<anonymous>' call
    this_12.hj_1 = new Vec3(-10744.105, 7007.923, 33.536);
    this_12.ij_1 = new Vec3(0.0, 0.0, -160.0);
    this_12.dj_1 = 0.75;
    this_12.ej_1 = 0.5;
    var tmp_12 = this_12;
    // Inline function 'kotlin.apply' call
    var this_13 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE2.<anonymous>' call
    this_13.hj_1 = new Vec3(-11312.577, 8120.395, 33.536);
    this_13.ij_1 = new Vec3(0.0, 0.0, 50.0);
    this_13.dj_1 = 0.75;
    this_13.ej_1 = 0.75;
    var tmp_13 = this_13;
    // Inline function 'kotlin.apply' call
    var this_14 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Penguins.IDLE2.<anonymous>' call
    this_14.hj_1 = new Vec3(-10070.444, 7941.108, 65.833);
    this_14.ij_1 = new Vec3(0.0, 0.0, 155.0);
    this_14.dj_1 = 0.75;
    this_14.ej_1 = 0.8;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_8.zk_1 = [tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, this_14];
  }
  var Penguins_instance;
  function Penguins_getInstance() {
    if (Penguins_instance == null)
      new Penguins();
    return Penguins_instance;
  }
  function toggleDayNightObjects($this) {
    var isDay = Colors_getInstance().bk_1[$this.settings.timeOfDay.g4_1].sj_1;
    $this.commandStars.enabled = !isDay;
    $this.groupBirds.enabled = isDay;
    $this.groupAnimalsAnimated.enabled = isDay;
    $this.groupAnimalsSleeping.enabled = !isDay;
    $this.groupShips.enabled = isDay;
  }
  function updateColors($this) {
    var colors = Colors_getInstance().bk_1[$this.settings.timeOfDay.g4_1];
    setUniform($this.rl_1.s(2), colors.ak_1.r, colors.ak_1.g, colors.ak_1.b, colors.ak_1.a);
    setUniform_0($this.rl_1.s(3), 0.0, 1500.0);
    setUniform($this.tl_1.s(1), colors.xj_1.r, colors.xj_1.g, colors.xj_1.b, colors.xj_1.a);
    setUniform($this.ul_1.s(1), colors.wj_1.r, colors.wj_1.g, colors.wj_1.b, colors.wj_1.a);
    var tmp = $this.ul_1.s(2);
    // Inline function 'kotlin.math.sin' call
    var x = $this.timers.ni(Timers_CloudsAnimation_getInstance()) * $this.PIf * 2.0;
    var tmp$ret$0 = Math.sin(x);
    setUniform_1(tmp, tmp$ret$0);
    $this.commandClouds.transform.r9_1.z = $this.timers.ni(Timers_CloudsRotation_getInstance()) * 360.0;
  }
  function updateWater($this) {
    var colors = Colors_getInstance().bk_1[$this.settings.timeOfDay.g4_1];
    var k = 0.2;
    var timeFract = $this.timers.ni(Timers_Water_getInstance()) * 80.0 * k % 1.0;
    timeFract = timeFract / k;
    setUniform_1($this.sl_1.s(2), timeFract);
    setUniform_1($this.sl_1.s(3), $this.timers.ni(Timers_WaterLarge_getInstance()));
    setUniform_1($this.sl_1.s(4), 15.0);
    setUniform($this.sl_1.s(7), colors.yj_1.r, colors.yj_1.g, colors.yj_1.b, colors.yj_1.a);
    setUniform($this.sl_1.s(8), colors.zj_1.r, colors.zj_1.g, colors.zj_1.b, colors.zj_1.a);
    setUniform_0($this.sl_1.s(5), 10000.0, 15000.0);
    setUniform($this.sl_1.s(6), 5000.0, 2000.0, 1.0, $this.settings.blurred ? 100.0 : 20000.0);
  }
  function updateTimeOfDayTextures($this) {
    $this.uniformPaletteTexture.value = Textures_getInstance().lm_1[$this.settings.timeOfDay.g4_1];
    $this.uniformSkyTexture.value = Textures_getInstance().mm_1[$this.settings.timeOfDay.g4_1];
  }
  function updateSun($this) {
    var colors = Colors_getInstance().bk_1[$this.settings.timeOfDay.g4_1];
    $this.commandSun.enabled = !colors.tj_1;
    $this.commandSunLow.enabled = colors.tj_1;
  }
  function updateBirds($this) {
    var tmp = $this.groupBirds.commands;
    var commands = isInterface(tmp, List) ? tmp : THROW_CCE();
    var angle = $this.timers.ni(Timers_BirdsFly_getInstance()) * $this.PIf * 2.0;
    setBirdPosition($this, angle, 0.0, 0.0, commands.s(0).transform.q9_1);
    setBirdPosition($this, -angle - $this.PIf, 0.0, -4000.0, commands.s(1).transform.q9_1);
    setBirdPosition($this, -angle - $this.PIf, 0.0, 3000.0, commands.s(2).transform.q9_1);
    setBirdPosition($this, angle, 7000.0, 3000.0, commands.s(3).transform.q9_1);
    setBirdPosition($this, -angle - $this.PIf, 5000.0, 3000.0, commands.s(4).transform.q9_1);
    setBirdPosition($this, angle, -5000.0, 7000.0, commands.s(5).transform.q9_1);
    commands.s(0).transform.r9_1.z = (-angle + $this.PIf / 2.0) * 57.29578;
    commands.s(1).transform.r9_1.z = (angle + $this.PIf / 2.0) * 57.29578;
    commands.s(2).transform.r9_1.z = (angle + $this.PIf / 2.0) * 57.29578;
    commands.s(3).transform.r9_1.z = (-angle + $this.PIf / 2.0) * 57.29578;
    commands.s(4).transform.r9_1.z = (angle + $this.PIf / 2.0) * 57.29578;
    commands.s(5).transform.r9_1.z = (-angle + $this.PIf / 2.0) * 57.29578;
    var wingTimer1 = $this.timers.ni(Timers_BirdWings1_getInstance());
    var wingTimer2 = $this.timers.ni(Timers_BirdWings2_getInstance());
    setAnimationUniforms$default($this, wingTimer1, Animations_getInstance().mj_1, commands.s(0).uniforms);
    setAnimationUniforms$default($this, wingTimer2, Animations_getInstance().mj_1, commands.s(1).uniforms);
    setAnimationUniforms$default($this, wingTimer1 + 0.3, Animations_getInstance().mj_1, commands.s(2).uniforms);
    setAnimationUniforms$default($this, wingTimer2 + 0.5, Animations_getInstance().mj_1, commands.s(3).uniforms);
    setAnimationUniforms$default($this, wingTimer1 + 0.5, Animations_getInstance().mj_1, commands.s(4).uniforms);
    setAnimationUniforms$default($this, wingTimer2 + 0.6, Animations_getInstance().mj_1, commands.s(5).uniforms);
    var tmp0_iterator = commands.j();
    while (tmp0_iterator.q()) {
      var command = tmp0_iterator.r();
      setUniform(command.uniforms.s(1), 0.1640625, 0.1484375, 0.1171875, 1.0);
    }
  }
  function setBirdPosition($this, angle, centerX, centerY, translation) {
    // Inline function 'kotlin.math.sin' call
    translation.x = Math.sin(angle) * $this.BIRD_FLIGHT_RADIUS + centerX;
    // Inline function 'kotlin.math.cos' call
    translation.y = Math.cos(angle) * $this.BIRD_FLIGHT_RADIUS + centerY;
  }
  function setAnimationUniforms($this, timerAnim, animation, uniforms, startEndStart) {
    var timer = timerAnim % 1.0;
    setUniform_2(uniforms.s(2), animation.mb_1);
    setUniform_1(uniforms.s(3), 1.0 / animation.rb_1);
    setUniform(uniforms.s(5), animation.mb_1, animation.ob_1, startEndStart ? animation.tb(timer) : animation.ub(timer), animation.sb_1);
  }
  function setAnimationUniforms$default($this, timerAnim, animation, uniforms, startEndStart, $super) {
    startEndStart = startEndStart === VOID ? true : startEndStart;
    return setAnimationUniforms($this, timerAnim, animation, uniforms, startEndStart);
  }
  function updateShips($this) {
    var tmp = $this.groupShips.commands;
    var commandsShips = isInterface(tmp, List) ? tmp : THROW_CCE();
    var timerSpline = $this.timers.ni(Timers_Ships_getInstance());
    var inductionVariable = 0;
    var last = ShipsConfig_getInstance().nm_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ship = ShipsConfig_getInstance().nm_1[i];
        var command = commandsShips.s(i);
        var position = ship.om_1.rd(timerSpline);
        var rotation = ship.om_1.yd(timerSpline).z + 180.0;
        command.transform.q9_1.x = position.x;
        command.transform.q9_1.y = position.y;
        command.transform.q9_1.z = position.z;
        command.transform.r9_1.z = rotation;
        command.transform.s9_1.x = ship.pm_1;
        command.transform.s9_1.y = ship.pm_1;
        command.transform.s9_1.z = ship.pm_1;
      }
       while (inductionVariable < last);
  }
  function updateAnimalsAnimated($this) {
    var timerPenguinIdle = $this.timers.ni(Timers_PenguinIdle_getInstance());
    var timerPenguinIdle2 = $this.timers.ni(Timers_PenguinIdle2_getInstance());
    var timerSealIdle = $this.timers.ni(Timers_SealIdleAnim_getInstance());
    var timerSealWalk = $this.timers.ni(Timers_SealWalkAnim_getInstance());
    var timerSealSpline = $this.timers.ni(Timers_SealWalkSpline_getInstance());
    var tmp = $this.groupPenguinsIdle.commands;
    var commandsPenguins1 = isInterface(tmp, List) ? tmp : THROW_CCE();
    var tmp_0 = $this.groupPenguinsIdle2.commands;
    var commandsPenguins2 = isInterface(tmp_0, List) ? tmp_0 : THROW_CCE();
    var tmp_1 = $this.groupSealIdle.commands;
    var commandsSealsIdle = isInterface(tmp_1, List) ? tmp_1 : THROW_CCE();
    var tmp_2 = $this.groupSealWalking.commands;
    var commandsSealsWalking = isInterface(tmp_2, List) ? tmp_2 : THROW_CCE();
    var inductionVariable = 0;
    var last = Penguins_getInstance().yk_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var command = commandsPenguins1.s(i);
        var config = Penguins_getInstance().yk_1[i];
        setAnimationUniforms$default($this, timerPenguinIdle + config.ej_1, Animations_getInstance().nj_1, command.uniforms);
      }
       while (inductionVariable < last);
    var inductionVariable_0 = 0;
    var last_0 = Penguins_getInstance().zk_1.length;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var command_0 = commandsPenguins2.s(i_0);
        var config_0 = Penguins_getInstance().zk_1[i_0];
        setAnimationUniforms$default($this, timerPenguinIdle2 + config_0.ej_1, Animations_getInstance().oj_1, command_0.uniforms);
      }
       while (inductionVariable_0 < last_0);
    var inductionVariable_1 = 0;
    var last_1 = Seals_getInstance().rm_1.length;
    if (inductionVariable_1 < last_1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var command_1 = commandsSealsIdle.s(i_1);
        var config_1 = Seals_getInstance().rm_1[i_1];
        setAnimationUniforms($this, timerSealIdle + config_1.ej_1, Animations_getInstance().pj_1, command_1.uniforms, false);
      }
       while (inductionVariable_1 < last_1);
    var inductionVariable_2 = 0;
    var last_2 = Seals_getInstance().sm_1.length;
    if (inductionVariable_2 < last_2)
      $l$loop: do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var command_2 = commandsSealsWalking.s(i_2);
        var config_2 = Seals_getInstance().sm_1[i_2];
        if (config_2.lj_1 == null) {
          continue $l$loop;
        }
        var position = ensureNotNull(config_2.lj_1).rd(timerSealSpline);
        var rotation = ensureNotNull(config_2.lj_1).yd(timerSealSpline).z - 90.0;
        setAnimationUniforms($this, timerSealWalk + config_2.ej_1, Animations_getInstance().qj_1, command_2.uniforms, false);
        command_2.transform.q9_1.x = position.x;
        command_2.transform.q9_1.y = position.y;
        command_2.transform.q9_1.z = position.z;
        command_2.transform.r9_1.z = rotation;
        command_2.transform.s9_1.x = config_2.dj_1;
        command_2.transform.s9_1.y = config_2.dj_1;
        command_2.transform.s9_1.z = config_2.dj_1;
      }
       while (inductionVariable_2 < last_2);
  }
  function updateAnimalsSleeping($this) {
  }
  function ArcticScene() {
    Scene.call(this);
    this.timers = new TimersMap();
    this.fl_1 = 1000000.0;
    this.gl_1 = 23000.0;
    this.hl_1 = 2000.0;
    this.FOV_TRANSITION = 20.0;
    this.pl_1 = mutableListOf([get_HINT_VRS_4X4()]);
    this.uniformPaletteTexture = new UniformTextureValue(Textures_getInstance().vl_1);
    this.uniformSkyTexture = new UniformTextureValue(Textures_getInstance().zl_1);
    this.BIRD_FLIGHT_RADIUS = 19000.0;
    this.PIf = 3.1415927;
    this.meshes = Meshes_getInstance().xk_1;
    this.textures = Textures_getInstance().km_1;
    this.shaders = Shaders_getInstance().dn_1;
    Companion_instance.en(this.timers);
    this.Z_NEAR = 20.0;
    this.Z_FAR = 115000.0;
    this.FOV_LANDSCAPE = 50.0;
    this.FOV_PORTRAIT = 75.0;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new ArcticSettings();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_0.cameraPeriod = 1.0;
    this_0.vignette = true;
    this_0.blurred = false;
    this_0.autoSwitchCameras = true;
    this_0.timeOfDay = TimeOfDay_Day_getInstance();
    tmp.settings = this_0;
    this.cameraAnimator = new CameraPathAnimator(this.fl_1, this.gl_1, this.hl_1, true);
    this.cameraAnimator.setCameras(Cameras_getInstance().rj_1);
    this.cameraAnimator.minDurationCoefficient = this.settings.cameraPeriod;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new ClearColorCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_1.color = new Vec4(1.0, 0.0, 1.0, 1.0);
    this_1.name = 'clear color';
    this_1.enabled = true;
    tmp_0.ml_1 = this_1;
    var statePaletteFp16 = new DrawMeshState(Shaders_getInstance().tm_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_U0_getInstance(), 1, VertexFormat_HALF_getInstance(), 6)]), 8));
    var stateDiffuseFp16 = new DrawMeshState(Shaders_getInstance().um_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_FLOAT3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 12)]), 16));
    var stateWater = new DrawMeshState(Shaders_getInstance().wm_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 6)]), 12));
    var stateDiffuseZFog = new DrawMeshState(Shaders_getInstance().vm_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_U0_getInstance(), 1, VertexFormat_HALF_getInstance(), 6)]), 8));
    var txOrigin = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(1.0, 1.0, 1.0));
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var this_2 = DrawStaticMeshCommandConstructor(Meshes_getInstance().lk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture]), stateDiffuseFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_2.hints = this.pl_1;
    tmp_1.commandSun = this_2;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_3 = DrawStaticMeshCommandConstructor(Meshes_getInstance().mk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture]), stateDiffuseFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_3.hints = this.pl_1;
    tmp_2.commandSunLow = this_3;
    // Inline function 'kotlin.apply' call
    var this_4 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_4.name = 'sun';
    this_4.enabled = true;
    this_4.commands = mutableListOf([this.commandSun, this.commandSunLow]);
    var groupSun = this_4;
    this.ql_1 = listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture]);
    this.rl_1 = listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformFloatValueWithArray(new Float32Array(4)), UniformFloatValueWithArray(new Float32Array(2))]);
    // Inline function 'kotlin.apply' call
    var this_5 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_5.name = 'mountains';
    this_5.enabled = true;
    var tmp_3 = this_5;
    // Inline function 'kotlin.apply' call
    var this_6 = DrawStaticMeshCommandConstructor(Meshes_getInstance().jk_1, this.ql_1, statePaletteFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>.<anonymous>' call
    this_6.hints = this.pl_1;
    var tmp_4 = this_6;
    // Inline function 'kotlin.apply' call
    var this_7 = DrawStaticMeshCommandConstructor(Meshes_getInstance().kk_1, this.rl_1, stateDiffuseZFog, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>.<anonymous>' call
    this_7.hints = this.pl_1;
    tmp_3.commands = mutableListOf([tmp_4, this_7]);
    var groupMountains = this_5;
    this.sl_1 = listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance().em_1), UniformFloatValueWithArray(new Float32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), UniformFloatValueWithArray(new Float32Array(2)), UniformFloatValueWithArray(new Float32Array(4)), UniformFloatValueWithArray(new Float32Array(4)), UniformFloatValueWithArray(new Float32Array(4))]);
    var commandWater = DrawStaticMeshCommandConstructor(Meshes_getInstance().nk_1, this.sl_1, stateWater, txOrigin);
    var stateSky = new DrawMeshState(Shaders_getInstance().xm_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_FLOAT3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 12)]), 16));
    var commandSky = DrawStaticMeshCommandConstructor(Meshes_getInstance().ok_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformSkyTexture, new UniformTextureValue(Textures_getInstance().dm_1)]), stateSky, txOrigin);
    var stateStars = new DrawMeshState(Shaders_getInstance().ym_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_FLOAT3_getInstance(), 0)), 12));
    this.tl_1 = listOf([UniformFloatValueWithArray(new Float32Array(16)), UniformFloatValueWithArray(new Float32Array(4))]);
    var tmp_5 = this;
    // Inline function 'kotlin.apply' call
    var this_8 = DrawStaticMeshCommandConstructor(Meshes_getInstance().pk_1, this.tl_1, stateStars, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_8.hints = this.pl_1;
    tmp_5.commandStars = this_8;
    var stateClouds = new DrawMeshState(Shaders_getInstance().an_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_FLOAT3_getInstance(), 0), new VertexAttribute(AttributeType_U0_getInstance(), 1, VertexFormat_UBYTE_NORMALIZED_getInstance(), 12)]), 16));
    this.ul_1 = listOf([UniformFloatValueWithArray(new Float32Array(16)), UniformFloatValueWithArray(new Float32Array(4)), UniformFloatValueWithArray(new Float32Array(1))]);
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_9 = new DrawTransformedMeshCommand(Meshes_getInstance().qk_1, this.ul_1, stateClouds, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(1.0, 1.0, 1.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_9.hints = this.pl_1;
    tmp_6.commandClouds = this_9;
    var stateBird = new DrawMeshState(Shaders_getInstance().bn_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), null);
    var tmp_7 = this;
    // Inline function 'kotlin.apply' call
    var this_10 = new DrawTransformedMeshCommand(Meshes_getInstance().rk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), UniformFloatValueWithArray(new Float32Array(4)), UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().fm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateBird, new AffineTranformation(new Vec3(0.0, 0.0, 10000.0), new Vec3(0.0, 0.0, 0.0), new Vec3(6.0, 3.0, 3.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_10.hints = this.pl_1;
    var tmp_8 = this_10;
    // Inline function 'kotlin.apply' call
    var this_11 = new DrawTransformedMeshCommand(Meshes_getInstance().rk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), UniformFloatValueWithArray(new Float32Array(4)), UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().fm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateBird, new AffineTranformation(new Vec3(0.0, 0.0, 11000.0), new Vec3(0.0, 0.0, 0.0), new Vec3(6.0, 3.0, 3.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_11.hints = this.pl_1;
    var tmp_9 = this_11;
    // Inline function 'kotlin.apply' call
    var this_12 = new DrawTransformedMeshCommand(Meshes_getInstance().rk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), UniformFloatValueWithArray(new Float32Array(4)), UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().fm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateBird, new AffineTranformation(new Vec3(0.0, 0.0, 12000.0), new Vec3(0.0, 0.0, 0.0), new Vec3(6.0, 3.0, 3.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_12.hints = this.pl_1;
    var tmp_10 = this_12;
    // Inline function 'kotlin.apply' call
    var this_13 = new DrawTransformedMeshCommand(Meshes_getInstance().rk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), UniformFloatValueWithArray(new Float32Array(4)), UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().fm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateBird, new AffineTranformation(new Vec3(0.0, 0.0, 13000.0), new Vec3(0.0, 0.0, 0.0), new Vec3(6.0, 3.0, 3.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_13.hints = this.pl_1;
    var tmp_11 = this_13;
    // Inline function 'kotlin.apply' call
    var this_14 = new DrawTransformedMeshCommand(Meshes_getInstance().rk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), UniformFloatValueWithArray(new Float32Array(4)), UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().fm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateBird, new AffineTranformation(new Vec3(0.0, 0.0, 14000.0), new Vec3(0.0, 0.0, 0.0), new Vec3(6.0, 3.0, 3.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_14.hints = this.pl_1;
    var tmp_12 = this_14;
    // Inline function 'kotlin.apply' call
    var this_15 = new DrawTransformedMeshCommand(Meshes_getInstance().rk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), UniformFloatValueWithArray(new Float32Array(4)), UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().fm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateBird, new AffineTranformation(new Vec3(0.0, 0.0, 15000.0), new Vec3(0.0, 0.0, 0.0), new Vec3(6.0, 3.0, 3.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_15.hints = this.pl_1;
    tmp_7.groupBirds = GroupCommandArr(true, [tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, this_15]);
    var tmp_13 = this;
    // Inline function 'kotlin.apply' call
    var this_16 = new DrawTransformedMeshCommand(Meshes_getInstance().sk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture]), statePaletteFp16, new AffineTranformation());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_16.hints = this.pl_1;
    var tmp_14 = this_16;
    // Inline function 'kotlin.apply' call
    var this_17 = new DrawTransformedMeshCommand(Meshes_getInstance().sk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture]), statePaletteFp16, new AffineTranformation());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_17.hints = this.pl_1;
    var tmp_15 = this_17;
    // Inline function 'kotlin.apply' call
    var this_18 = new DrawTransformedMeshCommand(Meshes_getInstance().sk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture]), statePaletteFp16, new AffineTranformation());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_18.hints = this.pl_1;
    tmp_13.groupShips = GroupCommandArr(true, [tmp_14, tmp_15, this_18]);
    var stateAnimatedTextured = new DrawMeshState(Shaders_getInstance().cn_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_UV0_getInstance(), 0, VertexFormat_HALF2_getInstance(), 0)), 4));
    var tmp_16 = this;
    // Inline function 'kotlin.apply' call
    var this_19 = DrawStaticMeshCommandConstructor(Meshes_getInstance().tk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().gm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().yk_1[0].hj_1, Penguins_getInstance().yk_1[0].ij_1, new Vec3(Penguins_getInstance().yk_1[0].dj_1, Penguins_getInstance().yk_1[0].dj_1, Penguins_getInstance().yk_1[0].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_19.hints = this.pl_1;
    var tmp_17 = this_19;
    // Inline function 'kotlin.apply' call
    var this_20 = DrawStaticMeshCommandConstructor(Meshes_getInstance().tk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().gm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().yk_1[1].hj_1, Penguins_getInstance().yk_1[1].ij_1, new Vec3(Penguins_getInstance().yk_1[1].dj_1, Penguins_getInstance().yk_1[1].dj_1, Penguins_getInstance().yk_1[1].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_20.hints = this.pl_1;
    var tmp_18 = this_20;
    // Inline function 'kotlin.apply' call
    var this_21 = DrawStaticMeshCommandConstructor(Meshes_getInstance().tk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().gm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().yk_1[2].hj_1, Penguins_getInstance().yk_1[2].ij_1, new Vec3(Penguins_getInstance().yk_1[2].dj_1, Penguins_getInstance().yk_1[2].dj_1, Penguins_getInstance().yk_1[2].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_21.hints = this.pl_1;
    var tmp_19 = this_21;
    // Inline function 'kotlin.apply' call
    var this_22 = DrawStaticMeshCommandConstructor(Meshes_getInstance().tk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().gm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().yk_1[3].hj_1, Penguins_getInstance().yk_1[3].ij_1, new Vec3(Penguins_getInstance().yk_1[3].dj_1, Penguins_getInstance().yk_1[3].dj_1, Penguins_getInstance().yk_1[3].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_22.hints = this.pl_1;
    var tmp_20 = this_22;
    // Inline function 'kotlin.apply' call
    var this_23 = DrawStaticMeshCommandConstructor(Meshes_getInstance().tk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().gm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().yk_1[4].hj_1, Penguins_getInstance().yk_1[4].ij_1, new Vec3(Penguins_getInstance().yk_1[4].dj_1, Penguins_getInstance().yk_1[4].dj_1, Penguins_getInstance().yk_1[4].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_23.hints = this.pl_1;
    var tmp_21 = this_23;
    // Inline function 'kotlin.apply' call
    var this_24 = DrawStaticMeshCommandConstructor(Meshes_getInstance().tk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().gm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().yk_1[5].hj_1, Penguins_getInstance().yk_1[5].ij_1, new Vec3(Penguins_getInstance().yk_1[5].dj_1, Penguins_getInstance().yk_1[5].dj_1, Penguins_getInstance().yk_1[5].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_24.hints = this.pl_1;
    var tmp_22 = this_24;
    // Inline function 'kotlin.apply' call
    var this_25 = DrawStaticMeshCommandConstructor(Meshes_getInstance().tk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().gm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().yk_1[6].hj_1, Penguins_getInstance().yk_1[6].ij_1, new Vec3(Penguins_getInstance().yk_1[6].dj_1, Penguins_getInstance().yk_1[6].dj_1, Penguins_getInstance().yk_1[6].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_25.hints = this.pl_1;
    var tmp_23 = this_25;
    // Inline function 'kotlin.apply' call
    var this_26 = DrawStaticMeshCommandConstructor(Meshes_getInstance().tk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().gm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().yk_1[7].hj_1, Penguins_getInstance().yk_1[7].ij_1, new Vec3(Penguins_getInstance().yk_1[7].dj_1, Penguins_getInstance().yk_1[7].dj_1, Penguins_getInstance().yk_1[7].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_26.hints = this.pl_1;
    var tmp_24 = this_26;
    // Inline function 'kotlin.apply' call
    var this_27 = DrawStaticMeshCommandConstructor(Meshes_getInstance().tk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().gm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().yk_1[8].hj_1, Penguins_getInstance().yk_1[8].ij_1, new Vec3(Penguins_getInstance().yk_1[8].dj_1, Penguins_getInstance().yk_1[8].dj_1, Penguins_getInstance().yk_1[8].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_27.hints = this.pl_1;
    tmp_16.groupPenguinsIdle = GroupCommandArr(true, [tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, this_27]);
    var tmp_25 = this;
    // Inline function 'kotlin.apply' call
    var this_28 = DrawStaticMeshCommandConstructor(Meshes_getInstance().uk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().hm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().zk_1[0].hj_1, Penguins_getInstance().zk_1[0].ij_1, new Vec3(Penguins_getInstance().zk_1[0].dj_1, Penguins_getInstance().zk_1[0].dj_1, Penguins_getInstance().zk_1[0].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_28.hints = this.pl_1;
    var tmp_26 = this_28;
    // Inline function 'kotlin.apply' call
    var this_29 = DrawStaticMeshCommandConstructor(Meshes_getInstance().uk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().hm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().zk_1[1].hj_1, Penguins_getInstance().zk_1[1].ij_1, new Vec3(Penguins_getInstance().zk_1[1].dj_1, Penguins_getInstance().zk_1[1].dj_1, Penguins_getInstance().zk_1[1].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_29.hints = this.pl_1;
    var tmp_27 = this_29;
    // Inline function 'kotlin.apply' call
    var this_30 = DrawStaticMeshCommandConstructor(Meshes_getInstance().uk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().hm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().zk_1[2].hj_1, Penguins_getInstance().zk_1[2].ij_1, new Vec3(Penguins_getInstance().zk_1[2].dj_1, Penguins_getInstance().zk_1[2].dj_1, Penguins_getInstance().zk_1[2].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_30.hints = this.pl_1;
    var tmp_28 = this_30;
    // Inline function 'kotlin.apply' call
    var this_31 = DrawStaticMeshCommandConstructor(Meshes_getInstance().uk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().hm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().zk_1[3].hj_1, Penguins_getInstance().zk_1[3].ij_1, new Vec3(Penguins_getInstance().zk_1[3].dj_1, Penguins_getInstance().zk_1[3].dj_1, Penguins_getInstance().zk_1[3].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_31.hints = this.pl_1;
    var tmp_29 = this_31;
    // Inline function 'kotlin.apply' call
    var this_32 = DrawStaticMeshCommandConstructor(Meshes_getInstance().uk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().hm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().zk_1[4].hj_1, Penguins_getInstance().zk_1[4].ij_1, new Vec3(Penguins_getInstance().zk_1[4].dj_1, Penguins_getInstance().zk_1[4].dj_1, Penguins_getInstance().zk_1[4].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_32.hints = this.pl_1;
    var tmp_30 = this_32;
    // Inline function 'kotlin.apply' call
    var this_33 = DrawStaticMeshCommandConstructor(Meshes_getInstance().uk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().hm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Penguins_getInstance().zk_1[5].hj_1, Penguins_getInstance().zk_1[5].ij_1, new Vec3(Penguins_getInstance().zk_1[5].dj_1, Penguins_getInstance().zk_1[5].dj_1, Penguins_getInstance().zk_1[5].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_33.hints = this.pl_1;
    tmp_25.groupPenguinsIdle2 = GroupCommandArr(true, [tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, this_33]);
    var tmp_31 = this;
    // Inline function 'kotlin.apply' call
    var this_34 = DrawStaticMeshCommandConstructor(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().im_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Seals_getInstance().rm_1[0].hj_1, Seals_getInstance().rm_1[0].ij_1, new Vec3(Seals_getInstance().rm_1[0].dj_1, Seals_getInstance().rm_1[0].dj_1, Seals_getInstance().rm_1[0].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_34.hints = this.pl_1;
    var tmp_32 = this_34;
    // Inline function 'kotlin.apply' call
    var this_35 = DrawStaticMeshCommandConstructor(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().im_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Seals_getInstance().rm_1[1].hj_1, Seals_getInstance().rm_1[1].ij_1, new Vec3(Seals_getInstance().rm_1[1].dj_1, Seals_getInstance().rm_1[1].dj_1, Seals_getInstance().rm_1[1].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_35.hints = this.pl_1;
    var tmp_33 = this_35;
    // Inline function 'kotlin.apply' call
    var this_36 = DrawStaticMeshCommandConstructor(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().im_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Seals_getInstance().rm_1[2].hj_1, Seals_getInstance().rm_1[2].ij_1, new Vec3(Seals_getInstance().rm_1[2].dj_1, Seals_getInstance().rm_1[2].dj_1, Seals_getInstance().rm_1[2].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_36.hints = this.pl_1;
    var tmp_34 = this_36;
    // Inline function 'kotlin.apply' call
    var this_37 = DrawStaticMeshCommandConstructor(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().im_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Seals_getInstance().rm_1[3].hj_1, Seals_getInstance().rm_1[3].ij_1, new Vec3(Seals_getInstance().rm_1[3].dj_1, Seals_getInstance().rm_1[3].dj_1, Seals_getInstance().rm_1[3].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_37.hints = this.pl_1;
    var tmp_35 = this_37;
    // Inline function 'kotlin.apply' call
    var this_38 = DrawStaticMeshCommandConstructor(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().im_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Seals_getInstance().rm_1[4].hj_1, Seals_getInstance().rm_1[4].ij_1, new Vec3(Seals_getInstance().rm_1[4].dj_1, Seals_getInstance().rm_1[4].dj_1, Seals_getInstance().rm_1[4].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_38.hints = this.pl_1;
    var tmp_36 = this_38;
    // Inline function 'kotlin.apply' call
    var this_39 = DrawStaticMeshCommandConstructor(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().im_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Seals_getInstance().rm_1[5].hj_1, Seals_getInstance().rm_1[5].ij_1, new Vec3(Seals_getInstance().rm_1[5].dj_1, Seals_getInstance().rm_1[5].dj_1, Seals_getInstance().rm_1[5].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_39.hints = this.pl_1;
    var tmp_37 = this_39;
    // Inline function 'kotlin.apply' call
    var this_40 = DrawStaticMeshCommandConstructor(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().im_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Seals_getInstance().rm_1[6].hj_1, Seals_getInstance().rm_1[6].ij_1, new Vec3(Seals_getInstance().rm_1[6].dj_1, Seals_getInstance().rm_1[6].dj_1, Seals_getInstance().rm_1[6].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_40.hints = this.pl_1;
    var tmp_38 = this_40;
    // Inline function 'kotlin.apply' call
    var this_41 = DrawStaticMeshCommandConstructor(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().im_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation(Seals_getInstance().rm_1[7].hj_1, Seals_getInstance().rm_1[7].ij_1, new Vec3(Seals_getInstance().rm_1[7].dj_1, Seals_getInstance().rm_1[7].dj_1, Seals_getInstance().rm_1[7].dj_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_41.hints = this.pl_1;
    tmp_31.groupSealIdle = GroupCommandArr(true, [tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, tmp_38, this_41]);
    var tmp_39 = this;
    // Inline function 'kotlin.apply' call
    var this_42 = new DrawTransformedMeshCommand(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().jm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_42.hints = this.pl_1;
    var tmp_40 = this_42;
    // Inline function 'kotlin.apply' call
    var this_43 = new DrawTransformedMeshCommand(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().jm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_43.hints = this.pl_1;
    var tmp_41 = this_43;
    // Inline function 'kotlin.apply' call
    var this_44 = new DrawTransformedMeshCommand(Meshes_getInstance().vk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture, UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(Textures_getInstance().jm_1), UniformFloatValueWithArray(new Float32Array(4))]), stateAnimatedTextured, new AffineTranformation());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_44.hints = this.pl_1;
    tmp_39.groupSealWalking = GroupCommandArr(true, [tmp_40, tmp_41, this_44]);
    this.groupAnimalsAnimated = GroupCommandArr(true, [this.groupPenguinsIdle, this.groupPenguinsIdle2, this.groupSealIdle, this.groupSealWalking]);
    var tmp_42 = this;
    // Inline function 'kotlin.apply' call
    var this_45 = DrawStaticMeshCommandConstructor(Meshes_getInstance().wk_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), this.uniformPaletteTexture]), stateDiffuseFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_45.hints = this.pl_1;
    tmp_42.groupAnimalsSleeping = GroupCommandArr(true, [this_45]);
    var tmp_43 = this;
    // Inline function 'kotlin.apply' call
    var this_46 = new ClearCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_46.clearType = ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
    tmp_43.ll_1 = GroupCommandArr(true, [this.ml_1, this_46]);
    var tmp_44 = this;
    // Inline function 'kotlin.apply' call
    var this_47 = new VignetteCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_47.color0 = new Vec4(0.65, 0.65, 0.65, 1.0);
    this_47.color1 = new Vec4(1.0, 1.0, 1.0, 1.0);
    tmp_44.nl_1 = this_47;
    this.il_1 = GroupCommandArr(true, [MainPassCommandArr(true, [this.ll_1, this.groupBirds, this.groupShips, this.groupAnimalsAnimated, this.groupAnimalsSleeping, groupSun, groupMountains, commandWater, this.commandStars, this.commandClouds, commandSky, this.nl_1])]);
    var tmp_45 = this;
    // Inline function 'kotlin.apply' call
    var this_48 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_48.name = 'blurred-main';
    this_48.enabled = true;
    this_48.minSize = 220;
    this_48.brightness = 0.91;
    this_48.blurSize = BlurSize_KERNEL_4_getInstance();
    this_48.commands = mutableListOf([this.ll_1, this.groupShips, this.groupAnimalsAnimated, this.groupAnimalsSleeping, groupSun, groupMountains, commandWater, this.commandStars, this.commandClouds, commandSky, this.nl_1]);
    tmp_45.kl_1 = this_48;
    var tmp_46 = this;
    // Inline function 'kotlin.apply' call
    var this_49 = new DrawBlurredCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.ArcticScene.<anonymous>' call
    this_49.name = 'draw blurred';
    this_49.blending = get_BLENDING_NONE();
    tmp_46.ol_1 = this_49;
    this.jl_1 = GroupCommandArr(false, [this.kl_1, MainPassCommandArr(true, [this.ll_1, this.ol_1])]);
    this.commands = mutableListOf([this.il_1, this.jl_1]);
  }
  protoOf(ArcticScene).fn = function () {
    return this.timers;
  };
  protoOf(ArcticScene).gn = function () {
    return this.cameraAnimator;
  };
  protoOf(ArcticScene).hn = function () {
    return this.FOV_TRANSITION;
  };
  protoOf(ArcticScene).in = function () {
    return this.settings;
  };
  protoOf(ArcticScene).jn = function () {
    return this.uniformPaletteTexture;
  };
  protoOf(ArcticScene).kn = function () {
    return this.uniformSkyTexture;
  };
  protoOf(ArcticScene).ln = function () {
    return this.commandClouds;
  };
  protoOf(ArcticScene).mn = function () {
    return this.commandStars;
  };
  protoOf(ArcticScene).nn = function () {
    return this.groupBirds;
  };
  protoOf(ArcticScene).on = function () {
    return this.BIRD_FLIGHT_RADIUS;
  };
  protoOf(ArcticScene).pn = function () {
    return this.groupShips;
  };
  protoOf(ArcticScene).qn = function () {
    return this.groupAnimalsAnimated;
  };
  protoOf(ArcticScene).rn = function () {
    return this.groupAnimalsSleeping;
  };
  protoOf(ArcticScene).sn = function () {
    return this.groupPenguinsIdle;
  };
  protoOf(ArcticScene).tn = function () {
    return this.groupPenguinsIdle2;
  };
  protoOf(ArcticScene).un = function () {
    return this.groupSealIdle;
  };
  protoOf(ArcticScene).vn = function () {
    return this.groupSealWalking;
  };
  protoOf(ArcticScene).wn = function () {
    return this.commandSun;
  };
  protoOf(ArcticScene).xn = function () {
    return this.commandSunLow;
  };
  protoOf(ArcticScene).yn = function () {
    return this.PIf;
  };
  protoOf(ArcticScene).updateTimers = function (time) {
    this.timers.qi(time);
    this.cameraAnimator.animate(time);
    this.animate();
    protoOf(Scene).updateTimers.call(this, time);
  };
  protoOf(ArcticScene).updateViewportSize = function (width, height) {
    protoOf(Scene).updateViewportSize.call(this, width, height);
  };
  protoOf(ArcticScene).initialize = function () {
  };
  protoOf(ArcticScene).applySettings = function () {
    this.il_1.enabled = !this.settings.blurred;
    this.jl_1.enabled = this.settings.blurred;
    this.nl_1.enabled = this.settings.vignette;
    if (!(this.cameraAnimator.minDurationCoefficient === this.settings.cameraPeriod)) {
      this.cameraAnimator.minDurationCoefficient = this.settings.cameraPeriod;
    }
    if ((this.cameraAnimator.timer > 0.99 ? this.settings.autoSwitchCameras : false) ? Default_getInstance().v5() < 0.5 : false) {
      this.randomCamera();
    }
  };
  protoOf(ArcticScene).animate = function () {
    this.applySettings();
    this.calculateProjection();
    var cameraPositionInterpolator = this.cameraAnimator.positionInterpolator;
    var eye = cameraPositionInterpolator.cameraPosition;
    var lookat = cameraPositionInterpolator.cameraRotation;
    if (!this.useExternalViewMatrix) {
      Matrix_getInstance().dh(this.matView, 0, eye.x, eye.y, eye.z, lookat.x, lookat.y, lookat.z, 0.0, 0.0, 1.0);
    }
    toggleDayNightObjects(this);
    updateTimeOfDayTextures(this);
    updateSun(this);
    updateBirds(this);
    updateShips(this);
    updateAnimalsAnimated(this);
    updateAnimalsSleeping(this);
    updateWater(this);
    updateColors(this);
    this.updateMeshTransformations(this.commands);
  };
  protoOf(ArcticScene).nextCamera = function () {
    this.cameraAnimator.nextCamera();
  };
  protoOf(ArcticScene).randomCamera = function () {
    if (this.cameraAnimator.state.equals(CameraState_TRANSITIONING_getInstance())) {
      return Unit_instance;
    }
    this.cameraAnimator.positionInterpolator.reverse = Default_getInstance().v5() < 0.5;
    this.cameraAnimator.randomCamera();
  };
  function Seals() {
    Seals_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.apply' call
    var this_0 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.IDLE.<anonymous>' call
    this_0.hj_1 = new Vec3(-10197.612, -11412.881, 163.703);
    this_0.ij_1 = new Vec3(0.0, 0.0, 305.0);
    this_0.dj_1 = 21.6;
    this_0.ej_1 = 0.1;
    var tmp_0 = this_0;
    // Inline function 'kotlin.apply' call
    var this_1 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.IDLE.<anonymous>' call
    this_1.hj_1 = new Vec3(-11490.098, -10868.786, 163.703);
    this_1.ij_1 = new Vec3(0.0, 0.0, 180.0);
    this_1.dj_1 = 21.0;
    this_1.ej_1 = 0.2;
    var tmp_1 = this_1;
    // Inline function 'kotlin.apply' call
    var this_2 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.IDLE.<anonymous>' call
    this_2.hj_1 = new Vec3(-12481.07, -9990.127, 163.703);
    this_2.ij_1 = new Vec3(0.0, 0.0, 40.0);
    this_2.dj_1 = 24.0;
    this_2.ej_1 = 0.0;
    var tmp_2 = this_2;
    // Inline function 'kotlin.apply' call
    var this_3 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.IDLE.<anonymous>' call
    this_3.hj_1 = new Vec3(-8848.467, -10551.67, 163.703);
    this_3.ij_1 = new Vec3(0.0, 0.0, 270.0);
    this_3.dj_1 = 23.0;
    this_3.ej_1 = 0.66;
    var tmp_3 = this_3;
    // Inline function 'kotlin.apply' call
    var this_4 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.IDLE.<anonymous>' call
    this_4.hj_1 = new Vec3(-11421.474, -8197.367, 163.703);
    this_4.ij_1 = new Vec3(0.0, 0.0, 155.0);
    this_4.dj_1 = 22.0;
    this_4.ej_1 = 0.3;
    var tmp_4 = this_4;
    // Inline function 'kotlin.apply' call
    var this_5 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.IDLE.<anonymous>' call
    this_5.hj_1 = new Vec3(-9098.065, -9784.568, 163.703);
    this_5.ij_1 = new Vec3(0.0, 0.0, 180.0);
    this_5.dj_1 = 21.0;
    this_5.ej_1 = 0.7;
    var tmp_5 = this_5;
    // Inline function 'kotlin.apply' call
    var this_6 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.IDLE.<anonymous>' call
    this_6.hj_1 = new Vec3(-8929.758, -9630.826, 163.703);
    this_6.ij_1 = new Vec3(0.0, 0.0, 260.0);
    this_6.dj_1 = 20.0;
    this_6.ej_1 = 0.2;
    var tmp_6 = this_6;
    // Inline function 'kotlin.apply' call
    var this_7 = new AnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.IDLE.<anonymous>' call
    this_7.hj_1 = new Vec3(-9159.626, -9498.492, 163.703);
    this_7.ij_1 = new Vec3(0.0, 0.0, 25.0);
    this_7.dj_1 = 22.0;
    this_7.ej_1 = 0.4;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.rm_1 = [tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, this_7];
    var tmp_7 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.apply' call
    var this_8 = new SplineAnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.WALKING.<anonymous>' call
    var tmp_8 = this_8;
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_9 = new Float64Array([0.0, 0.0, -8594.068359375, -9185.310546875, -10173.7734375, -11037.0615234375, -11556.869140625, -11171.4091796875, -10388.73046875, -9319.6591796875, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_10 = new Float64Array([0.0, 0.0, -11242.3720703125, -10794.060546875, -10646.896484375, -10959.65625, -11507.3251953125, -12299.8046875, -12791.134765625, -12134.208984375, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp$ret$13 = new Float64Array([0.0, 0.0, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 0.0, 0.0]);
    tmp_8.lj_1 = Spline3D_init_$Create$(true, tmp_9, tmp_10, tmp$ret$13);
    this_8.dj_1 = 25.0;
    this_8.ej_1 = 0.4;
    var tmp_11 = this_8;
    // Inline function 'kotlin.apply' call
    var this_9 = new SplineAnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.WALKING.<anonymous>' call
    var tmp_12 = this_9;
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_13 = new Float64Array([0.0, 0.0, -11045.8798828125, -11852.0166015625, -12877.1728515625, -13320.65625, -13395.7041015625, -12947.1123046875, -12279.501953125, -11478.47265625, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_14 = new Float64Array([0.0, 0.0, -9073.04296875, -8490.494140625, -8394.025390625, -9009.2021484375, -9902.9755859375, -10920.896484375, -11452.736328125, -10402.1875, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp$ret$17 = new Float64Array([0.0, 0.0, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 0.0, 0.0]);
    tmp_12.lj_1 = Spline3D_init_$Create$(true, tmp_13, tmp_14, tmp$ret$17);
    this_9.dj_1 = 22.0;
    this_9.ej_1 = 0.6;
    var tmp_15 = this_9;
    // Inline function 'kotlin.apply' call
    var this_10 = new SplineAnimatedObjectInfo();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Seals.WALKING.<anonymous>' call
    var tmp_16 = this_10;
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_17 = new Float64Array([0.0, 0.0, -10500.1298828125, -10924.8193359375, -10816.751953125, -9659.0244140625, -8474.8583984375, -8261.033203125, -8579.9658203125, -9526.828125, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_18 = new Float64Array([0.0, 0.0, -9078.6171875, -9745.982421875, -10364.9296875, -10400.5146484375, -10125.8681640625, -9503.888671875, -8930.3291015625, -8849.357421875, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp$ret$21 = new Float64Array([0.0, 0.0, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 204.815673828125, 0.0, 0.0]);
    tmp_16.lj_1 = Spline3D_init_$Create$(true, tmp_17, tmp_18, tmp$ret$21);
    this_10.dj_1 = 23.0;
    this_10.ej_1 = 0.88;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_7.sm_1 = [tmp_11, tmp_15, this_10];
  }
  var Seals_instance;
  function Seals_getInstance() {
    if (Seals_instance == null)
      new Seals();
    return Seals_instance;
  }
  var TimeOfDay_Day_instance;
  var TimeOfDay_Night_instance;
  var TimeOfDay_Sunrise_instance;
  var TimeOfDay_Sunset_instance;
  function values() {
    return [TimeOfDay_Day_getInstance(), TimeOfDay_Night_getInstance(), TimeOfDay_Sunrise_getInstance(), TimeOfDay_Sunset_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Day':
        return TimeOfDay_Day_getInstance();
      case 'Night':
        return TimeOfDay_Night_getInstance();
      case 'Sunrise':
        return TimeOfDay_Sunrise_getInstance();
      case 'Sunset':
        return TimeOfDay_Sunset_getInstance();
      default:
        TimeOfDay_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var TimeOfDay_entriesInitialized;
  function TimeOfDay_initEntries() {
    if (TimeOfDay_entriesInitialized)
      return Unit_instance;
    TimeOfDay_entriesInitialized = true;
    TimeOfDay_Day_instance = new TimeOfDay('Day', 0, 0);
    TimeOfDay_Night_instance = new TimeOfDay('Night', 1, 1);
    TimeOfDay_Sunrise_instance = new TimeOfDay('Sunrise', 2, 2);
    TimeOfDay_Sunset_instance = new TimeOfDay('Sunset', 3, 3);
  }
  function TimeOfDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
  }
  function ArcticSettings() {
    this.cameraPeriod = 1.0;
    this.vignette = true;
    this.blurred = false;
    this.autoSwitchCameras = true;
    this.timeOfDay = TimeOfDay_Day_getInstance();
    this.clock = false;
    this.lowQuality = false;
  }
  protoOf(ArcticSettings).bo = function (_set____db54di) {
    this.cameraPeriod = _set____db54di;
  };
  protoOf(ArcticSettings).co = function () {
    return this.cameraPeriod;
  };
  protoOf(ArcticSettings).do = function (_set____db54di) {
    this.vignette = _set____db54di;
  };
  protoOf(ArcticSettings).eo = function () {
    return this.vignette;
  };
  protoOf(ArcticSettings).fo = function (_set____db54di) {
    this.blurred = _set____db54di;
  };
  protoOf(ArcticSettings).go = function () {
    return this.blurred;
  };
  protoOf(ArcticSettings).ho = function (_set____db54di) {
    this.autoSwitchCameras = _set____db54di;
  };
  protoOf(ArcticSettings).io = function () {
    return this.autoSwitchCameras;
  };
  protoOf(ArcticSettings).jo = function (_set____db54di) {
    this.timeOfDay = _set____db54di;
  };
  protoOf(ArcticSettings).ko = function () {
    return this.timeOfDay;
  };
  protoOf(ArcticSettings).lo = function (_set____db54di) {
    this.clock = _set____db54di;
  };
  protoOf(ArcticSettings).mo = function () {
    return this.clock;
  };
  protoOf(ArcticSettings).no = function (_set____db54di) {
    this.lowQuality = _set____db54di;
  };
  protoOf(ArcticSettings).oo = function () {
    return this.lowQuality;
  };
  function TimeOfDay_Day_getInstance() {
    TimeOfDay_initEntries();
    return TimeOfDay_Day_instance;
  }
  function TimeOfDay_Night_getInstance() {
    TimeOfDay_initEntries();
    return TimeOfDay_Night_instance;
  }
  function TimeOfDay_Sunrise_getInstance() {
    TimeOfDay_initEntries();
    return TimeOfDay_Sunrise_instance;
  }
  function TimeOfDay_Sunset_getInstance() {
    TimeOfDay_initEntries();
    return TimeOfDay_Sunset_instance;
  }
  function Shaders() {
    Shaders_instance = this;
    this.tm_1 = new Shader('Palette');
    this.um_1 = new Shader('Diffuse');
    this.vm_1 = new Shader('DiffuseZFog');
    this.wm_1 = new Shader('CausticsWater');
    this.xm_1 = new Shader('SkyDither');
    this.ym_1 = new Shader('Color');
    this.zm_1 = new Shader('ColorAnimatedTextureChunked');
    this.an_1 = new Shader('Cloud');
    this.bn_1 = new Shader('ColorAnimatedTextureChunked');
    this.cn_1 = new Shader('DiffuseAnimatedTextureChunked');
    this.dn_1 = mutableListOf([this.um_1, this.tm_1, this.vm_1, this.wm_1, this.xm_1, this.ym_1, this.zm_1, this.an_1, this.bn_1, this.cn_1]);
  }
  var Shaders_instance;
  function Shaders_getInstance() {
    if (Shaders_instance == null)
      new Shaders();
    return Shaders_instance;
  }
  function ShipConfig(spline, scale, animTimerOffset) {
    this.om_1 = spline;
    this.pm_1 = scale;
    this.qm_1 = animTimerOffset;
  }
  function ShipsConfig() {
    ShipsConfig_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_0 = new Float64Array([0.0, 0.0, 24566.40234375, 26321.6640625, 26708.22265625, 25413.6328125, 21720.98828125, 16347.2109375, 11130.576171875, -1738.1689453125, -5963.7197265625, -10164.759765625, -14386.349609375, -19112.7109375, -23859.62109375, -27219.46875, -28770.119140625, -28933.70703125, -27569.021484375, -24096.890625, -19096.490234375, -14164.109375, -9853.759765625, -5611.431640625, -1371.3896484375, 2872.943359375, 7115.0, 11400.76953125, 16216.3984375, 21075.7578125, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_1 = new Float64Array([0.0, 0.0, -2645.7470703125, -2308.08984375, -1332.42919921875, -524.489013671875, -188.111328125, -19.454345703125, 87.28076171875, 141.75341796875, 128.7080078125, 141.283447265625, 426.818359375, 1443.571166992188, 2733.282470703125, 3168.5166015625, 1871.808227539063, -279.37744140625, -1780.083984375, -1864.28125, -1298.00048828125, -874.37158203125, -1001.830078125, -1271.9423828125, -1252.52978515625, -486.420654296875, 569.2119140625, 975.029541015625, -11.353515625, -1647.552734375, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp$ret$2 = new Float64Array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
    var tmp_2 = new ShipConfig(Spline3D_init_$Create$(true, tmp_0, tmp_1, tmp$ret$2), 1.1, 0.4);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_3 = new Float64Array([0.0, 0.0, 5714.380859375, 7315.091796875, 8650.72265625, 8823.93359375, 7143.5078125, 4300.67578125, 1471.7890625, -841.138671875, -3140.115234375, -5754.8447265625, -8983.2392578125, -12527.380859375, -15823.2197265625, -18887.14453125, -21702.765625, -23656.859375, -24672.4296875, -24826.474609375, -23736.755859375, -20925.265625, -16870.01171875, -12622.77734375, -8198.072265625, -3581.3828125, 219.033203125, 2683.359375, 4331.4140625, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_4 = new Float64Array([0.0, 0.0, 17442.65625, 17650.91015625, 18617.86328125, 20306.828125, 23014.0546875, 26443.2890625, 29669.087890625, 32581.82421875, 35291.12109375, 37200.40625, 37881.41015625, 37762.40625, 37531.61328125, 37789.6640625, 37935.92578125, 36856.74609375, 33521.96484375, 28961.73828125, 25152.900390625, 22777.57421875, 21153.63671875, 20211.54296875, 20346.490234375, 21163.28125, 21406.8046875, 20214.69921875, 18449.328125, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp$ret$5 = new Float64Array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
    var tmp_5 = new ShipConfig(Spline3D_init_$Create$(true, tmp_3, tmp_4, tmp$ret$5), 1.7, 0.6);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_6 = new Float64Array([0.0, 0.0, -16359.05859375, -14598.0546875, -13475.6875, -14188.6171875, -18206.640625, -24059.94921875, -28535.79296875, -30099.376953125, -30285.4921875, -30485.732421875, -30806.443359375, -31141.27734375, -32562.830078125, -35985.46875, -40494.81640625, -44420.37109375, -47366.64453125, -49729.125, -51023.7578125, -50949.22265625, -49806.84375, -48016.53125, -45479.21484375, -42293.97265625, -39177.921875, -36336.46875, -33564.20703125, -30962.0703125, -28666.095703125, -26540.240234375, -24277.328125, -21516.3984375, -18618.40234375, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp_7 = new Float64Array([0.0, 0.0, -28069.041015625, -26702.79296875, -23600.751953125, -20893.908203125, -19807.138671875, -19115.580078125, -17275.615234375, -13230.767578125, -8037.52099609375, -3321.68798828125, 514.55712890625, 3873.38818359375, 6335.501953125, 7855.1728515625, 8478.1279296875, 7922.24853515625, 5656.2490234375, 2211.415771484375, -1100.50830078125, -4002.49853515625, -6771.58056640625, -8927.087890625, -9960.884765625, -10381.111328125, -11231.494140625, -13150.048828125, -15498.767578125, -17407.33984375, -18208.109375, -18568.73828125, -19621.876953125, -22554.5234375, -26179.6875, 0.0, 0.0]);
    // Inline function 'kotlin.doubleArrayOf' call
    var tmp$ret$8 = new Float64Array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.nm_1 = [tmp_2, tmp_5, new ShipConfig(Spline3D_init_$Create$(true, tmp_6, tmp_7, tmp$ret$8), 1.4, 0.88)];
  }
  var ShipsConfig_instance;
  function ShipsConfig_getInstance() {
    if (ShipsConfig_instance == null)
      new ShipsConfig();
    return ShipsConfig_instance;
  }
  function Textures() {
    Textures_instance = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texPaletteDay.<anonymous>' call
    this_0.name = 'palette-day';
    this_0.fileName = 'palette-day';
    this_0.format = TextureFormat_RGBA8_getInstance();
    this_0.minFilter = TextureFiltering_NEAREST_getInstance();
    this_0.magFilter = TextureFiltering_NEAREST_getInstance();
    this_0.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp.vl_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texPaletteNight.<anonymous>' call
    this_1.name = 'palette-night';
    this_1.fileName = 'palette-night';
    this_1.format = TextureFormat_RGBA8_getInstance();
    this_1.minFilter = TextureFiltering_NEAREST_getInstance();
    this_1.magFilter = TextureFiltering_NEAREST_getInstance();
    this_1.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp_0.wl_1 = this_1;
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var this_2 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texPaletteSunrise.<anonymous>' call
    this_2.name = 'palette-sunrise';
    this_2.fileName = 'palette-sunrise';
    this_2.format = TextureFormat_RGBA8_getInstance();
    this_2.minFilter = TextureFiltering_NEAREST_getInstance();
    this_2.magFilter = TextureFiltering_NEAREST_getInstance();
    this_2.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp_1.xl_1 = this_2;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_3 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texPaletteSunset.<anonymous>' call
    this_3.name = 'palette-sunset';
    this_3.fileName = 'palette-sunset';
    this_3.format = TextureFormat_RGBA8_getInstance();
    this_3.minFilter = TextureFiltering_NEAREST_getInstance();
    this_3.magFilter = TextureFiltering_NEAREST_getInstance();
    this_3.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp_2.yl_1 = this_3;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    var this_4 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texSkyDay.<anonymous>' call
    this_4.name = 'sky-day';
    this_4.fileName = 'sky-day';
    this_4.format = TextureFormat_RGBA8_getInstance();
    this_4.minFilter = TextureFiltering_LINEAR_getInstance();
    this_4.magFilter = TextureFiltering_LINEAR_getInstance();
    this_4.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp_3.zl_1 = this_4;
    var tmp_4 = this;
    // Inline function 'kotlin.apply' call
    var this_5 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texSkyNight.<anonymous>' call
    this_5.name = 'sky-night';
    this_5.fileName = 'sky-night';
    this_5.format = TextureFormat_RGBA8_getInstance();
    this_5.minFilter = TextureFiltering_LINEAR_getInstance();
    this_5.magFilter = TextureFiltering_LINEAR_getInstance();
    this_5.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp_4.am_1 = this_5;
    var tmp_5 = this;
    // Inline function 'kotlin.apply' call
    var this_6 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texSkySunrise.<anonymous>' call
    this_6.name = 'sky-sunrise';
    this_6.fileName = 'sky-sunrise';
    this_6.format = TextureFormat_RGBA8_getInstance();
    this_6.minFilter = TextureFiltering_LINEAR_getInstance();
    this_6.magFilter = TextureFiltering_LINEAR_getInstance();
    this_6.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp_5.bm_1 = this_6;
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_7 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texSkySunset.<anonymous>' call
    this_7.name = 'sky-sunset';
    this_7.fileName = 'sky-sunset';
    this_7.format = TextureFormat_RGBA8_getInstance();
    this_7.minFilter = TextureFiltering_LINEAR_getInstance();
    this_7.magFilter = TextureFiltering_LINEAR_getInstance();
    this_7.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp_6.cm_1 = this_7;
    var tmp_7 = this;
    // Inline function 'kotlin.apply' call
    var this_8 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texNoise.<anonymous>' call
    this_8.name = 'blue-noise-16';
    this_8.fileName = 'blue-noise-16';
    this_8.format = TextureFormat_ASTC_getInstance();
    this_8.minFilter = TextureFiltering_NEAREST_getInstance();
    this_8.magFilter = TextureFiltering_NEAREST_getInstance();
    tmp_7.dm_1 = this_8;
    var tmp_8 = this;
    // Inline function 'kotlin.apply' call
    var this_9 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texWater.<anonymous>' call
    this_9.name = 'caustics1';
    this_9.fileName = 'caustics1';
    this_9.format = TextureFormat_ASTC_getInstance();
    this_9.minFilter = TextureFiltering_LINEAR_getInstance();
    this_9.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_9.mipmaps = 6;
    tmp_8.em_1 = this_9;
    var tmp_9 = this;
    // Inline function 'kotlin.apply' call
    var this_10 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texBird.<anonymous>' call
    this_10.name = 'bird';
    this_10.fileName = 'bird.rgba.fp16';
    this_10.format = TextureFormat_RGBA16F_getInstance();
    this_10.minFilter = TextureFiltering_NEAREST_getInstance();
    this_10.magFilter = TextureFiltering_NEAREST_getInstance();
    this_10.width = Animations_getInstance().mj_1.mb_1;
    this_10.height = Animations_getInstance().mj_1.rb_1;
    tmp_9.fm_1 = this_10;
    var tmp_10 = this;
    // Inline function 'kotlin.apply' call
    var this_11 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texPenguinIdle.<anonymous>' call
    this_11.name = 'penguin-idle';
    this_11.fileName = 'penguin/idle/animal.rgba.fp16';
    this_11.format = TextureFormat_RGBA16F_getInstance();
    this_11.minFilter = TextureFiltering_NEAREST_getInstance();
    this_11.magFilter = TextureFiltering_NEAREST_getInstance();
    this_11.width = Animations_getInstance().nj_1.mb_1;
    this_11.height = Animations_getInstance().nj_1.rb_1;
    tmp_10.gm_1 = this_11;
    var tmp_11 = this;
    // Inline function 'kotlin.apply' call
    var this_12 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texPenguinIdle2.<anonymous>' call
    this_12.name = 'penguin-idle';
    this_12.fileName = 'penguin/idle2/animal.rgba.fp16';
    this_12.format = TextureFormat_RGBA16F_getInstance();
    this_12.minFilter = TextureFiltering_NEAREST_getInstance();
    this_12.magFilter = TextureFiltering_NEAREST_getInstance();
    this_12.width = Animations_getInstance().oj_1.mb_1;
    this_12.height = Animations_getInstance().oj_1.rb_1;
    tmp_11.hm_1 = this_12;
    var tmp_12 = this;
    // Inline function 'kotlin.apply' call
    var this_13 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texSealIdle.<anonymous>' call
    this_13.name = 'seal-idle';
    this_13.fileName = 'seal/idle/animal.rgba.fp16';
    this_13.format = TextureFormat_RGBA16F_getInstance();
    this_13.minFilter = TextureFiltering_NEAREST_getInstance();
    this_13.magFilter = TextureFiltering_NEAREST_getInstance();
    this_13.width = Animations_getInstance().pj_1.mb_1;
    this_13.height = Animations_getInstance().pj_1.rb_1;
    tmp_12.im_1 = this_13;
    var tmp_13 = this;
    // Inline function 'kotlin.apply' call
    var this_14 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.arctic.Textures.texSealWalk.<anonymous>' call
    this_14.name = 'seal-walk';
    this_14.fileName = 'seal/walk/animal.rgba.fp16';
    this_14.format = TextureFormat_RGBA16F_getInstance();
    this_14.minFilter = TextureFiltering_NEAREST_getInstance();
    this_14.magFilter = TextureFiltering_NEAREST_getInstance();
    this_14.width = Animations_getInstance().qj_1.mb_1;
    this_14.height = Animations_getInstance().qj_1.rb_1;
    tmp_13.jm_1 = this_14;
    this.km_1 = mutableListOf([this.vl_1, this.wl_1, this.xl_1, this.yl_1, this.zl_1, this.am_1, this.bm_1, this.cm_1, this.dm_1, this.em_1, this.fm_1, this.gm_1, this.hm_1, this.im_1, this.jm_1]);
    var tmp_14 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_14.lm_1 = [this.vl_1, this.wl_1, this.xl_1, this.yl_1];
    var tmp_15 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_15.mm_1 = [this.zl_1, this.am_1, this.bm_1, this.cm_1];
  }
  var Textures_instance;
  function Textures_getInstance() {
    if (Textures_instance == null)
      new Textures();
    return Textures_instance;
  }
  var Timers_Camera_instance;
  var Timers_Water_instance;
  var Timers_WaterLarge_instance;
  var Timers_CloudsAnimation_instance;
  var Timers_CloudsRotation_instance;
  var Timers_BirdsFly_instance;
  var Timers_BirdWings1_instance;
  var Timers_BirdWings2_instance;
  var Timers_Ships_instance;
  var Timers_PenguinIdle_instance;
  var Timers_PenguinIdle2_instance;
  var Timers_SealIdleAnim_instance;
  var Timers_SealWalkAnim_instance;
  var Timers_SealWalkSpline_instance;
  function Companion() {
  }
  protoOf(Companion).en = function (timers) {
    timers.li(Timers_Water_getInstance(), 720000.0);
    timers.li(Timers_WaterLarge_getInstance(), 60000.0);
    timers.li(Timers_CloudsRotation_getInstance(), 300000.0);
    timers.li(Timers_CloudsAnimation_getInstance(), 15000.0);
    timers.li(Timers_BirdWings1_getInstance(), 1000.0);
    timers.li(Timers_BirdWings2_getInstance(), 900.0);
    timers.li(Timers_BirdsFly_getInstance(), 75000.0);
    timers.li(Timers_Ships_getInstance(), 200000.0);
    timers.li(Timers_PenguinIdle_getInstance(), 5000.0);
    timers.li(Timers_PenguinIdle2_getInstance(), 5000.0);
    timers.li(Timers_SealIdleAnim_getInstance(), 4000.0);
    timers.li(Timers_SealWalkAnim_getInstance(), 1900.0);
    timers.li(Timers_SealWalkSpline_getInstance(), 114000.0);
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  var Timers_entriesInitialized;
  function Timers_initEntries() {
    if (Timers_entriesInitialized)
      return Unit_instance;
    Timers_entriesInitialized = true;
    Timers_Camera_instance = new Timers('Camera', 0);
    Timers_Water_instance = new Timers('Water', 1);
    Timers_WaterLarge_instance = new Timers('WaterLarge', 2);
    Timers_CloudsAnimation_instance = new Timers('CloudsAnimation', 3);
    Timers_CloudsRotation_instance = new Timers('CloudsRotation', 4);
    Timers_BirdsFly_instance = new Timers('BirdsFly', 5);
    Timers_BirdWings1_instance = new Timers('BirdWings1', 6);
    Timers_BirdWings2_instance = new Timers('BirdWings2', 7);
    Timers_Ships_instance = new Timers('Ships', 8);
    Timers_PenguinIdle_instance = new Timers('PenguinIdle', 9);
    Timers_PenguinIdle2_instance = new Timers('PenguinIdle2', 10);
    Timers_SealIdleAnim_instance = new Timers('SealIdleAnim', 11);
    Timers_SealWalkAnim_instance = new Timers('SealWalkAnim', 12);
    Timers_SealWalkSpline_instance = new Timers('SealWalkSpline', 13);
  }
  function Timers(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Timers_Water_getInstance() {
    Timers_initEntries();
    return Timers_Water_instance;
  }
  function Timers_WaterLarge_getInstance() {
    Timers_initEntries();
    return Timers_WaterLarge_instance;
  }
  function Timers_CloudsAnimation_getInstance() {
    Timers_initEntries();
    return Timers_CloudsAnimation_instance;
  }
  function Timers_CloudsRotation_getInstance() {
    Timers_initEntries();
    return Timers_CloudsRotation_instance;
  }
  function Timers_BirdsFly_getInstance() {
    Timers_initEntries();
    return Timers_BirdsFly_instance;
  }
  function Timers_BirdWings1_getInstance() {
    Timers_initEntries();
    return Timers_BirdWings1_instance;
  }
  function Timers_BirdWings2_getInstance() {
    Timers_initEntries();
    return Timers_BirdWings2_instance;
  }
  function Timers_Ships_getInstance() {
    Timers_initEntries();
    return Timers_Ships_instance;
  }
  function Timers_PenguinIdle_getInstance() {
    Timers_initEntries();
    return Timers_PenguinIdle_instance;
  }
  function Timers_PenguinIdle2_getInstance() {
    Timers_initEntries();
    return Timers_PenguinIdle2_instance;
  }
  function Timers_SealIdleAnim_getInstance() {
    Timers_initEntries();
    return Timers_SealIdleAnim_instance;
  }
  function Timers_SealWalkAnim_getInstance() {
    Timers_initEntries();
    return Timers_SealWalkAnim_instance;
  }
  function Timers_SealWalkSpline_getInstance() {
    Timers_initEntries();
    return Timers_SealWalkSpline_instance;
  }
  function Cameras_0() {
    Cameras_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [new CameraPositionPair(new CameraPosition(new Vec3(1595.2762, -1516.1268, 83.44518), new Vec3(-569.53894, -770.3358, 151.01573)), new CameraPosition(new Vec3(1957.1698, 1356.8844, 83.44518), new Vec3(-515.5615, -151.354, 151.01573)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-829.46936, -908.0382, 136.9292), new Vec3(-165.64581, 1195.0557, 251.3715)), new CameraPosition(new Vec3(1024.0853, -362.24524, 136.9292), new Vec3(1414.9342, 567.3635, 251.3715)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-243.95557, 1205.2717, 136.9292), new Vec3(362.46558, -880.0043, 251.3715)), new CameraPosition(new Vec3(-819.9841, -194.45178, 136.9292), new Vec3(991.0796, 1096.154, 251.3715)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(81.35687, -835.5989, 39.98031), new Vec3(334.3451, -294.1427, 394.6469)), new CameraPosition(new Vec3(895.4863, -925.46606, 39.98031), new Vec3(1337.5438, -802.4769, 725.81354)), 1.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.po_1 = [tmp_0, [new CameraPositionPair(new CameraPosition(new Vec3(-842.0926, -846.5076, 129.98555), new Vec3(-674.4083, 775.07825, 47.71223)), new CameraPosition(new Vec3(-828.56775, 790.18756, 129.86708), new Vec3(940.84375, 1304.5559, 46.237785)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-1442.4281, -137.39117, 400.79602), new Vec3(98.2589, -729.51196, 445.23422)), new CameraPosition(new Vec3(-165.14899, 2.8690004, 130.22337), new Vec3(1178.7565, 470.28696, 214.73752)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-451.56958, -252.30167, 587.1848), new Vec3(-898.23376, 597.8059, 38.427677)), new CameraPosition(new Vec3(1161.2458, -52.537415, 721.2996), new Vec3(1249.9236, 615.2596, 46.237785)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-1809.4268, 206.302, 822.04504), new Vec3(-704.4282, -1200.5166, 570.46594)), new CameraPosition(new Vec3(485.292, 0.00439453, 654.2626), new Vec3(740.58057, 152.70099, 570.47485)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-1201.3511, -321.01813, 1267.3562), new Vec3(-1091.3955, 484.66968, -120.63285)), new CameraPosition(new Vec3(348.40283, 333.19476, 531.56305), new Vec3(1243.907, 207.53552, 454.83487)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(1280.2383, 0.00817871, 765.05676), new Vec3(1020.4136, -0.0057373, 681.30115)), new CameraPosition(new Vec3(-542.4983, -0.00439453, 765.0978), new Vec3(-716.4851, 0.00195313, 656.9107)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(684.19763, -906.22656, 562.2279), new Vec3(293.5536, -235.00806, 457.9884)), new CameraPosition(new Vec3(-355.00952, 702.02734, 585.4181), new Vec3(582.56335, 400.67163, 433.59796)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(255.49573, -216.34082, 356.14874), new Vec3(621.0696, 213.13354, 377.2011)), new CameraPosition(new Vec3(-261.60974, 210.44629, 9.956253), new Vec3(444.66296, 48.16748, 614.7096)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(187.09607, -779.0669, 151.3941), new Vec3(-729.9801, -1107.8511, 366.46796)), new CameraPosition(new Vec3(181.64563, 716.58813, 151.3935), new Vec3(-921.05164, -237.90332, 366.46844)), 1.0)]];
  }
  var Cameras_instance_0;
  function Cameras_getInstance_0() {
    if (Cameras_instance_0 == null)
      new Cameras_0();
    return Cameras_instance_0;
  }
  function DrawClockCommand() {
    Command.call(this);
    this.qo_1 = CommandType_CUSTOM_getInstance();
  }
  protoOf(DrawClockCommand).fa = function () {
    return this.qo_1;
  };
  function BrutalismScene() {
    Scene.call(this);
    this.timers = new TimersMap();
    this.wo_1 = 1000000.0;
    this.xo_1 = 22000.0;
    this.yo_1 = 3500.0;
    this.FOV_TRANSITION = 20.0;
    this.qp_1 = mutableListOf([get_HINT_VRS_NONE()]);
    this.Z_NEAR = 20.0;
    this.Z_FAR = 10000.0;
    this.FOV_LANDSCAPE = 85.0;
    this.FOV_PORTRAIT = 100.0;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new BrutalismSettings();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_0.lowQuality = false;
    this_0.cameraPeriod = 1.0;
    this_0.vignette = true;
    this_0.clock = false;
    this_0.blurred = false;
    this_0.colorMode = ColorMode_Normal_getInstance();
    this_0.autoSwitchCameras = true;
    tmp.settings = this_0;
    this.cameraAnimator = new CameraPathAnimator(this.wo_1, this.xo_1, this.yo_1, true);
    this.cameraAnimator.setCameras(Cameras_getInstance_0().po_1[1]);
    this.cameraAnimator.minDurationCoefficient = this.settings.cameraPeriod;
    this.op_1 = new Vec4(1.0, 1.0, 1.0, 1.0);
    this.pp_1 = new Vec4(0.74, 0.55, 0.3, 1.0);
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new ClearColorCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_1.color = this.op_1;
    this_1.name = 'clear color';
    this_1.enabled = true;
    tmp_0.np_1 = this_1;
    var attribs = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0), new MeshAttribute(AttributeType_UV0_getInstance(), VertexFormat_HALF2_getInstance(), 6)]), 12);
    // Inline function 'kotlin.apply' call
    var this_2 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_2.fileName = 'room1';
    this_2.attributes = attribs;
    var meshRoom1 = this_2;
    // Inline function 'kotlin.apply' call
    var this_3 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_3.fileName = 'room2-optimized0';
    this_3.attributes = attribs;
    var meshRoom20 = this_3;
    // Inline function 'kotlin.apply' call
    var this_4 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_4.fileName = 'room2-optimized1';
    this_4.attributes = attribs;
    var meshRoom21 = this_4;
    // Inline function 'kotlin.apply' call
    var this_5 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_5.fileName = 'room2-optimized2';
    this_5.attributes = attribs;
    var meshRoom22 = this_5;
    this.meshes = mutableListOf([meshRoom1, meshRoom20, meshRoom21, meshRoom22]);
    // Inline function 'kotlin.apply' call
    var this_6 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_6.name = 'room1';
    this_6.fileName = 'room1';
    this_6.format = TextureFormat_ASTC_getInstance();
    this_6.mipmaps = 11;
    this_6.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_6.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_6.anisotropy = 3;
    var texRoom1 = this_6;
    // Inline function 'kotlin.apply' call
    var this_7 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_7.name = 'room20';
    this_7.fileName = 'room20';
    this_7.format = TextureFormat_ASTC_getInstance();
    this_7.mipmaps = 12;
    this_7.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_7.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_7.anisotropy = 3;
    this_7.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    var texRoom20 = this_7;
    // Inline function 'kotlin.apply' call
    var this_8 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_8.name = 'room21';
    this_8.fileName = 'room21';
    this_8.format = TextureFormat_ASTC_getInstance();
    var texRoom21 = this_8;
    // Inline function 'kotlin.apply' call
    var this_9 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_9.name = 'room22';
    this_9.fileName = 'room22';
    this_9.format = TextureFormat_ASTC_getInstance();
    var texRoom22 = this_9;
    this.textures = mutableListOf([texRoom1, texRoom20, texRoom21, texRoom22]);
    // Inline function 'kotlin.apply' call
    var this_10 = new Shader();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_10.name = 'Diffuse';
    var shaderDiffuse = this_10;
    this.shaders = mutableListOf([shaderDiffuse]);
    var stateDiffuseFp16 = new DrawMeshState(shaderDiffuse, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 6)]), 12));
    var txOrigin = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(1.0, 1.0, 1.0));
    var txOriginRoom2 = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(1.0, 1.0, 1.0));
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var this_11 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_11.name = 'room1';
    this_11.enabled = false;
    var tmp_2 = this_11;
    // Inline function 'kotlin.apply' call
    var this_12 = new DrawTransformedMeshCommand(meshRoom1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(texRoom1)]), stateDiffuseFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_12.hints = this.qp_1;
    tmp_2.commands = mutableListOf([this_12]);
    tmp_1.zo_1 = this_11;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    var this_13 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_13.name = 'room1-blurred';
    var tmp_4 = this_13;
    // Inline function 'kotlin.apply' call
    var this_14 = new DrawTransformedMeshCommand(meshRoom1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(texRoom21)]), stateDiffuseFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_14.hints = mutableListOf([get_HINT_VRS_4X4()]);
    tmp_4.commands = mutableListOf([this_14]);
    tmp_3.ap_1 = this_13;
    var tmp_5 = this;
    // Inline function 'kotlin.apply' call
    var this_15 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_15.name = 'room2';
    this_15.enabled = true;
    var tmp_6 = this_15;
    // Inline function 'kotlin.apply' call
    var this_16 = new DrawTransformedMeshCommand(meshRoom20, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(texRoom20)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_16.hints = this.qp_1;
    var tmp_7 = this_16;
    // Inline function 'kotlin.apply' call
    var this_17 = new DrawTransformedMeshCommand(meshRoom21, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(texRoom21)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_17.hints = mutableListOf([get_HINT_VRS_4X4()]);
    var tmp_8 = this_17;
    // Inline function 'kotlin.apply' call
    var this_18 = new DrawTransformedMeshCommand(meshRoom22, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(texRoom22)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_18.hints = mutableListOf([get_HINT_VRS_4X4()]);
    tmp_6.commands = mutableListOf([tmp_7, tmp_8, this_18]);
    tmp_5.bp_1 = this_15;
    var tmp_9 = this;
    // Inline function 'kotlin.apply' call
    var this_19 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_19.name = 'room2-blurred';
    var tmp_10 = this_19;
    // Inline function 'kotlin.apply' call
    var this_20 = new DrawTransformedMeshCommand(meshRoom20, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(texRoom21)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_20.hints = mutableListOf([get_HINT_VRS_4X4()]);
    var tmp_11 = this_20;
    // Inline function 'kotlin.apply' call
    var this_21 = new DrawTransformedMeshCommand(meshRoom21, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(texRoom21)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_21.hints = mutableListOf([get_HINT_VRS_4X4()]);
    var tmp_12 = this_21;
    // Inline function 'kotlin.apply' call
    var this_22 = new DrawTransformedMeshCommand(meshRoom22, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(texRoom22)]), stateDiffuseFp16, txOriginRoom2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_22.hints = mutableListOf([get_HINT_VRS_4X4()]);
    tmp_10.commands = mutableListOf([tmp_11, tmp_12, this_22]);
    tmp_9.cp_1 = this_19;
    var tmp_13 = this;
    // Inline function 'kotlin.apply' call
    var this_23 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    var tmp_14 = this_23;
    // Inline function 'kotlin.apply' call
    var this_24 = new ClearCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_24.clearType = ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
    tmp_14.commands = mutableListOf([this.np_1, this_24]);
    tmp_13.dp_1 = this_23;
    var tmp_15 = this;
    // Inline function 'kotlin.apply' call
    var this_25 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_25.name = 'bloom1';
    this_25.enabled = false;
    this_25.minSize = 170;
    this_25.brightness = 1.0;
    this_25.blurSize = BlurSize_KERNEL_5_getInstance();
    this_25.commands = mutableListOf([this.dp_1, this.ap_1]);
    this_25.id = 0;
    tmp_15.ep_1 = this_25;
    var tmp_16 = this;
    // Inline function 'kotlin.apply' call
    var this_26 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_26.name = 'bloom2';
    this_26.enabled = true;
    this_26.minSize = 170;
    this_26.brightness = 1.0;
    this_26.blurSize = BlurSize_KERNEL_5_getInstance();
    this_26.commands = mutableListOf([this.dp_1, this.cp_1]);
    this_26.id = 1;
    tmp_16.fp_1 = this_26;
    var tmp_17 = this;
    // Inline function 'kotlin.apply' call
    var this_27 = new DrawBlurredCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_27.name = 'draw bloom';
    var tmp_18 = this_27;
    // Inline function 'kotlin.apply' call
    var this_28 = new Blending();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>.<anonymous>' call
    this_28.enabled = true;
    this_28.equationColor = BlendingEquation_ADD_getInstance();
    this_28.sourceFactorColor = BlendingFactor_ONE_getInstance();
    this_28.destinationFactorColor = BlendingFactor_ONE_getInstance();
    tmp_18.blending = this_28;
    tmp_17.gp_1 = this_27;
    var tmp_19 = this;
    // Inline function 'kotlin.apply' call
    var this_29 = new DrawBlurredCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_29.name = 'draw blurred';
    this_29.blending = get_BLENDING_NONE();
    tmp_19.hp_1 = this_29;
    var tmp_20 = this;
    // Inline function 'kotlin.apply' call
    var this_30 = new VignetteCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_30.color0 = new Vec4(0.4, 0.4, 0.4, 1.0);
    this_30.color1 = new Vec4(1.0, 1.0, 1.0, 1.0);
    tmp_20.ip_1 = this_30;
    this.jp_1 = new DrawClockCommand();
    this.kp_1 = GroupCommandArr(true, [this.ep_1, this.fp_1, MainPassCommandArr(true, [this.dp_1, this.zo_1, this.bp_1, this.gp_1, this.ip_1, this.jp_1])]);
    var tmp_21 = this;
    // Inline function 'kotlin.apply' call
    var this_31 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.brutalism.BrutalismScene.<anonymous>' call
    this_31.name = 'blurred-main';
    this_31.enabled = true;
    this_31.minSize = 200;
    this_31.brightness = 0.93;
    this_31.blurSize = BlurSize_KERNEL_3_getInstance();
    this_31.commands = mutableListOf([this.dp_1, this.zo_1, this.bp_1, this.ip_1]);
    this_31.id = 2;
    tmp_21.mp_1 = this_31;
    this.lp_1 = GroupCommandArr(true, [this.mp_1, MainPassCommandArr(true, [this.dp_1, this.hp_1])]);
    this.commands = mutableListOf([this.kp_1, this.lp_1]);
  }
  protoOf(BrutalismScene).fn = function () {
    return this.timers;
  };
  protoOf(BrutalismScene).gn = function () {
    return this.cameraAnimator;
  };
  protoOf(BrutalismScene).hn = function () {
    return this.FOV_TRANSITION;
  };
  protoOf(BrutalismScene).in = function () {
    return this.settings;
  };
  protoOf(BrutalismScene).updateTimers = function (time) {
    this.timers.qi(time);
    this.cameraAnimator.animate(time);
    this.animate();
    protoOf(Scene).updateTimers.call(this, time);
  };
  protoOf(BrutalismScene).updateViewportSize = function (width, height) {
    protoOf(Scene).updateViewportSize.call(this, width, height);
  };
  protoOf(BrutalismScene).initialize = function () {
  };
  protoOf(BrutalismScene).applySettings = function () {
    this.kp_1.enabled = !this.settings.blurred;
    this.lp_1.enabled = this.settings.blurred;
    this.ep_1.blurSize = this.settings.lowQuality ? BlurSize_KERNEL_3_getInstance() : BlurSize_KERNEL_5_getInstance();
    this.fp_1.blurSize = this.settings.lowQuality ? BlurSize_KERNEL_3_getInstance() : BlurSize_KERNEL_5_getInstance();
    this.qp_1.v(0, this.settings.lowQuality ? get_HINT_VRS_2X2() : get_HINT_VRS_NONE());
    this.ip_1.enabled = this.settings.vignette;
    if (!(this.cameraAnimator.minDurationCoefficient === this.settings.cameraPeriod)) {
      this.cameraAnimator.minDurationCoefficient = this.settings.cameraPeriod;
    }
    this.jp_1.enabled = this.settings.clock;
    if ((this.cameraAnimator.timer > 0.98 ? this.settings.autoSwitchCameras : false) ? Default_getInstance().v5() < 0.5 : false) {
      this.randomCameraOrNextRoom();
    }
    this.np_1.color = this.settings.colorMode.equals(ColorMode_Sepia_getInstance()) ? this.pp_1 : this.op_1;
  };
  protoOf(BrutalismScene).animate = function () {
    this.applySettings();
    this.calculateProjection();
    var cameraPositionInterpolator = this.cameraAnimator.positionInterpolator;
    var eye = cameraPositionInterpolator.cameraPosition;
    var lookat = cameraPositionInterpolator.cameraRotation;
    if (!this.useExternalViewMatrix) {
      Matrix_getInstance().dh(this.matView, 0, eye.x, eye.y, eye.z, lookat.x, lookat.y, lookat.z, 0.0, 0.0, 1.0);
    }
    this.updateMeshTransformations(this.commands);
  };
  protoOf(BrutalismScene).nextCamera = function () {
    this.cameraAnimator.nextCamera();
  };
  protoOf(BrutalismScene).nextRoom = function () {
    if (this.zo_1.enabled) {
      this.zo_1.enabled = false;
      this.bp_1.enabled = true;
      this.ep_1.enabled = false;
      this.fp_1.enabled = true;
      this.cameraAnimator.setCameras(Cameras_getInstance_0().po_1[1], true);
    } else if (this.bp_1.enabled) {
      this.zo_1.enabled = true;
      this.bp_1.enabled = false;
      this.ep_1.enabled = true;
      this.fp_1.enabled = false;
      this.cameraAnimator.setCameras(Cameras_getInstance_0().po_1[0], true);
    }
  };
  protoOf(BrutalismScene).nextCameraOrRoom = function () {
    if (this.cameraAnimator.state.equals(CameraState_TRANSITIONING_getInstance())) {
      return Unit_instance;
    }
    var switchRoomProbability = this.zo_1.enabled ? 0.75 : 0.25;
    if (Default_getInstance().v5() < switchRoomProbability) {
      this.nextRoom();
    } else {
      this.nextCamera();
    }
  };
  protoOf(BrutalismScene).randomCameraOrNextRoom = function () {
    if (this.cameraAnimator.state.equals(CameraState_TRANSITIONING_getInstance())) {
      return Unit_instance;
    }
    var switchRoomProbability = this.zo_1.enabled ? 0.75 : 0.25;
    if (Default_getInstance().v5() < switchRoomProbability) {
      this.nextRoom();
    } else {
      this.cameraAnimator.positionInterpolator.reverse = Default_getInstance().v5() < 0.5;
      this.cameraAnimator.randomCamera();
    }
  };
  function BrutalismSettings() {
    this.lowQuality = false;
    this.cameraPeriod = 1.0;
    this.vignette = true;
    this.clock = false;
    this.blurred = false;
    this.colorMode = ColorMode_Normal_getInstance();
    this.autoSwitchCameras = true;
  }
  protoOf(BrutalismSettings).no = function (_set____db54di) {
    this.lowQuality = _set____db54di;
  };
  protoOf(BrutalismSettings).oo = function () {
    return this.lowQuality;
  };
  protoOf(BrutalismSettings).bo = function (_set____db54di) {
    this.cameraPeriod = _set____db54di;
  };
  protoOf(BrutalismSettings).co = function () {
    return this.cameraPeriod;
  };
  protoOf(BrutalismSettings).do = function (_set____db54di) {
    this.vignette = _set____db54di;
  };
  protoOf(BrutalismSettings).eo = function () {
    return this.vignette;
  };
  protoOf(BrutalismSettings).lo = function (_set____db54di) {
    this.clock = _set____db54di;
  };
  protoOf(BrutalismSettings).mo = function () {
    return this.clock;
  };
  protoOf(BrutalismSettings).fo = function (_set____db54di) {
    this.blurred = _set____db54di;
  };
  protoOf(BrutalismSettings).go = function () {
    return this.blurred;
  };
  protoOf(BrutalismSettings).rp = function (_set____db54di) {
    this.colorMode = _set____db54di;
  };
  protoOf(BrutalismSettings).sp = function () {
    return this.colorMode;
  };
  protoOf(BrutalismSettings).ho = function (_set____db54di) {
    this.autoSwitchCameras = _set____db54di;
  };
  protoOf(BrutalismSettings).io = function () {
    return this.autoSwitchCameras;
  };
  function Cameras_1() {
    Cameras_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.tp_1 = [new CameraPositionPair(new CameraPosition(new Vec3(4.70217, 28.08873, 270.66443), new Vec3(5.00588, -3.6056, 275.06628)), new CameraPosition(new Vec3(3.12283, 192.89926, 247.77449), new Vec3(5.00588, -3.6056, 275.06628)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-167.48071, -247.32603, 395.07346), new Vec3(0.846, 0.52085, 0.0)), new CameraPosition(new Vec3(152.95543, -114.2289, 420.22528), new Vec3(1.062, 5.25603, 0.0)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(158.38203, -171.77576, 113.49699), new Vec3(81.33907, -44.77591, 97.18001)), new CameraPosition(new Vec3(142.91772, 36.96619, 102.5881), new Vec3(81.33907, -44.77591, 97.18001)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-103.18249, -51.5279, 135.98773), new Vec3(-69.98534, 2.29645, 78.0)), new CameraPosition(new Vec3(-102.42075, 79.90053, 96.44623), new Vec3(-69.98534, 2.29645, 78.0)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-60.00303, -233.00087, 134.61186), new Vec3(-2.0, -171.0, 152.0)), new CameraPosition(new Vec3(59.45997, -200.96883, 192.98213), new Vec3(-2.0, -171.0, 152.0)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-37.85454, 253.6224, 86.5639), new Vec3(-11.55309, 91.53834, 40.85777)), new CameraPosition(new Vec3(78.33339, 78.01169, 391.95297), new Vec3(20.69628, -1.54488, 246.84042)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-285.20566, 143.63365, 294.8095), new Vec3(0.492, 1.944, 100.0)), new CameraPosition(new Vec3(-208.13516, -316.1127, 249.54102), new Vec3(0.474, 0.84, 150.0)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-0.54002, 275.47906, 29.0), new Vec3(-33.0, -7.0, 85.0)), new CameraPosition(new Vec3(-237.66232, 128.6006, 29.0), new Vec3(-33.0, -7.0, 85.0)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(385.65573, -254.91086, 34.32199), new Vec3(172.69778, -349.50497, 89.22903)), new CameraPosition(new Vec3(228.97934, 319.29816, 34.32199), new Vec3(6.75666, 258.66278, 89.22903)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-170.00986, -272.70618, 22.899), new Vec3(0.0, 0.0, 100.0)), new CameraPosition(new Vec3(223.77429, -293.52405, 22.77371), new Vec3(0.0, 0.0, 200.0)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(154.41058, -342.53302, 229.82729), new Vec3(0.0, 0.0, 0.0)), new CameraPosition(new Vec3(281.98663, 86.11906, 272.93246), new Vec3(63.22815, 10.94927, 260.0)), 1.0)];
  }
  var Cameras_instance_1;
  function Cameras_getInstance_1() {
    if (Cameras_instance_1 == null)
      new Cameras_1();
    return Cameras_instance_1;
  }
  function Meshes_0() {
    Meshes_instance_0 = this;
    this.up_1 = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0), new MeshAttribute(AttributeType_UV0_getInstance(), VertexFormat_HALF2_getInstance(), 6)]), 12);
    this.vp_1 = new MeshAttributes(listOf_0(new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0)), 8);
    this.wp_1 = new MeshAttributes(listOf_0(new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_FLOAT3_getInstance(), 0)), 12);
    this.xp_1 = MeshConstructor2('grass', this.up_1);
    this.yp_1 = MeshConstructor2('bouy1', this.up_1);
    this.zp_1 = MeshConstructor2('boat', this.up_1);
    this.aq_1 = MeshConstructor2('bird1', this.up_1);
    this.bq_1 = MeshConstructor2('bird2', this.up_1);
    this.cq_1 = MeshConstructor2('grid30', this.vp_1);
    this.dq_1 = MeshConstructor2('stars', this.wp_1);
    this.eq_1 = MeshConstructor2('clouds', this.up_1);
    this.fq_1 = MeshConstructor2('fishnet', this.up_1);
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.gq_1 = [MeshConstructor2('arrow', this.up_1), MeshConstructor2('barrel', this.up_1), MeshConstructor2('box', this.up_1), MeshConstructor2('bricks', this.up_1), MeshConstructor2('dock', this.up_1), MeshConstructor2('fence', this.up_1), MeshConstructor2('fence_topLighthouse', this.up_1), MeshConstructor2('fish', this.up_1), MeshConstructor2('fishingspot', this.up_1), MeshConstructor2('fish_rope', this.up_1), MeshConstructor2('hengel', this.up_1), MeshConstructor2('house', this.up_1), MeshConstructor2('lifebouy-rope', this.up_1), MeshConstructor2('lifebouy', this.up_1), MeshConstructor2('lighthouse', this.up_1), MeshConstructor2('poles', this.up_1), MeshConstructor2('rock', this.up_1), MeshConstructor2('roof-tile', this.up_1), MeshConstructor2('sign', this.up_1), MeshConstructor2('smallPoles', this.up_1), MeshConstructor2('SupportBeams', this.up_1), MeshConstructor2('telescope', this.up_1), MeshConstructor2('tree', this.up_1)];
    this.hq_1 = mutableListOf(arrayConcat([this.gq_1, [this.xp_1, this.yp_1, this.zp_1, this.aq_1, this.bq_1, this.cq_1, this.dq_1, this.eq_1, this.fq_1]]));
  }
  var Meshes_instance_0;
  function Meshes_getInstance_0() {
    if (Meshes_instance_0 == null)
      new Meshes_0();
    return Meshes_instance_0;
  }
  function Preset(fogColor, waterColor, highlightColor, tintColor, cloudsColor) {
    fogColor = fogColor === VOID ? new Vec4() : fogColor;
    waterColor = waterColor === VOID ? new Vec4() : waterColor;
    highlightColor = highlightColor === VOID ? new Vec4() : highlightColor;
    tintColor = tintColor === VOID ? new Vec4() : tintColor;
    cloudsColor = cloudsColor === VOID ? new Vec4() : cloudsColor;
    this.iq_1 = fogColor;
    this.jq_1 = waterColor;
    this.kq_1 = highlightColor;
    this.lq_1 = tintColor;
    this.mq_1 = cloudsColor;
  }
  protoOf(Preset).toString = function () {
    return 'Preset(fogColor=' + this.iq_1 + ', waterColor=' + this.jq_1 + ', highlightColor=' + this.kq_1 + ', tintColor=' + this.lq_1 + ', cloudsColor=' + this.mq_1 + ')';
  };
  protoOf(Preset).hashCode = function () {
    var result = this.iq_1.hashCode();
    result = imul(result, 31) + this.jq_1.hashCode() | 0;
    result = imul(result, 31) + this.kq_1.hashCode() | 0;
    result = imul(result, 31) + this.lq_1.hashCode() | 0;
    result = imul(result, 31) + this.mq_1.hashCode() | 0;
    return result;
  };
  protoOf(Preset).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Preset))
      return false;
    var tmp0_other_with_cast = other instanceof Preset ? other : THROW_CCE();
    if (!this.iq_1.equals(tmp0_other_with_cast.iq_1))
      return false;
    if (!this.jq_1.equals(tmp0_other_with_cast.jq_1))
      return false;
    if (!this.kq_1.equals(tmp0_other_with_cast.kq_1))
      return false;
    if (!this.lq_1.equals(tmp0_other_with_cast.lq_1))
      return false;
    if (!this.mq_1.equals(tmp0_other_with_cast.mq_1))
      return false;
    return true;
  };
  function Presets() {
    Presets_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.nq_1 = [new Preset(new Vec4(0.7647058823529411, 0.9098039215686274, 0.9450980392156862, 1.0), new Vec4(0.387, 0.75, 0.795, 1.0), new Vec4(0.7843137254901961, 0.7843137254901961, 0.7843137254901961, 1.0), new Vec4(1.0, 1.0, 1.0, 1.0), new Vec4(1.0, 1.0, 1.0, 1.0)), new Preset(new Vec4(0.03137254901960784, 0.11372549019607843, 0.1843137254901961, 1.0), new Vec4(0.03529411764705882, 0.17254901960784313, 0.3176470588235294, 1.0), new Vec4(0.3137254901960784, 0.3137254901960784, 0.3137254901960784, 1.0), new Vec4(0.5215686274509804, 0.8705882352941177, 1.0, 1.0), new Vec4(0.0784313725490196, 0.3254901960784314, 0.47058823529411764, 1.0)), new Preset(new Vec4(1.0, 0.7686274509803922, 0.35294117647058826, 1.0), new Vec4(0.592156862745098, 0.6313725490196078, 0.5098039215686274, 1.0), new Vec4(0.5019607843137255, 0.43529411764705883, 0.23529411764705882, 1.0), new Vec4(1.0, 0.8705882352941177, 0.4745098039215686, 1.0), new Vec4(1.0, 0.8705882352941177, 0.47058823529411764, 1.0)), new Preset(new Vec4(0.21568627450980393, 0.2196078431372549, 0.47058823529411764, 1.0), new Vec4(0.0784313725490196, 0.20784313725490197, 0.4549019607843137, 1.0), new Vec4(0.5294117647058824, 0.3215686274509804, 0.48627450980392156, 1.0), new Vec4(0.9607843137254902, 0.7529411764705882, 0.9176470588235294, 1.0), new Vec4(0.9607843137254902, 0.7137254901960784, 0.8784313725490196, 1.0))];
  }
  var Presets_instance;
  function Presets_getInstance() {
    if (Presets_instance == null)
      new Presets();
    return Presets_instance;
  }
  function applySettings($this) {
    $this.pr_1.v(0, $this.settings.lowQuality ? get_HINT_VRS_2X2() : get_HINT_VRS_NONE());
    $this.uq_1.enabled = !$this.settings.blurred;
    $this.vq_1.enabled = $this.settings.blurred;
    $this.zq_1.enabled = $this.settings.vignette;
    $this.wq_1.blurSize = $this.settings.lowQuality ? BlurSize_KERNEL_2_getInstance() : BlurSize_KERNEL_4_getInstance();
    $this.zq_1.enabled = !$this.settings.lowQuality;
    if (!($this.cameraAnimator.minDurationCoefficient === $this.settings.cameraPeriod)) {
      $this.cameraAnimator.minDurationCoefficient = $this.settings.cameraPeriod;
    }
    if (($this.cameraAnimator.timer > 0.99 ? $this.settings.autoSwitchCameras : false) ? Default_getInstance().v5() < 0.5 : false) {
      $this.randomCamera();
    }
    $this.fr_1.enabled = $this.settings.timeOfDay.equals(TimeOfDay_Night_getInstance_0());
  }
  function animate($this, time) {
    applySettings($this);
    positionCamera($this, time);
    $this.calculateProjection();
    animateBouys($this);
    animateBirds($this);
    animateWater($this);
    animateFishnet($this);
    animateWind($this);
    $this.updateMeshTransformations($this.commands);
  }
  function animateWind($this) {
    var timer1 = $this.tq_1.ni(Timers_WindMove1_getInstance());
    var timer2 = $this.tq_1.ni(Timers_WindMove2_getInstance());
    var timer3 = $this.tq_1.ni(Timers_WindMove3_getInstance());
    animateWindBatch($this, 0, timer1, 0.36, $this.mr_1);
    animateWindBatch($this, 3, timer2, 0.37, $this.nr_1);
    animateWindBatch($this, 6, timer3, 0.38, $this.or_1);
  }
  function animateWindBatch($this, offset, timerWindMove, timerPhase, randomWindCoeff) {
    var X_SPREAD = 22.0;
    var inductionVariable = 0;
    if (inductionVariable <= 2)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = $this.ir_1.commands.s(offset + i | 0);
        var uniforms = (tmp instanceof DrawTransformedMeshCommand ? tmp : THROW_CCE()).uniforms;
        var timer = (timerWindMove + i * timerPhase) % 1.0;
        // Inline function 'kotlin.math.pow' call
        // Inline function 'kotlin.math.sin' call
        var x = timer * $this.PIf;
        var this_0 = Math.sin(x);
        var a = Math.pow(this_0, 2.0);
        var color = $this.lr_1 * a;
        var offsetX = -X_SPREAD + i * X_SPREAD + X_SPREAD * randomWindCoeff;
        var offsetY = timer * 2.0 * $this.jr_1;
        setUniform(uniforms.s(1), color, color, color, 1.0);
        setUniform_3(uniforms.s(2), offsetX, offsetY * 10.0, 0.0);
      }
       while (inductionVariable <= 2);
  }
  function animateBouys($this) {
    var timerBob = $this.tq_1.ni(Timers_BouysBobbing_getInstance());
    var timerRot = $this.tq_1.ni(Timers_BouysRotation_getInstance());
    // Inline function 'kotlin.math.sin' call
    var x = timerBob * $this.PIf * 2.0;
    var bob1 = Math.sin(x) * 4.0;
    // Inline function 'kotlin.math.sin' call
    var x_0 = timerBob * $this.PIf * 2.0 + 1.0;
    var bob2 = Math.sin(x_0) * 4.0;
    // Inline function 'kotlin.math.sin' call
    var x_1 = timerBob * $this.PIf * 2.0 + 2.0;
    var bob3 = Math.sin(x_1) * 4.0;
    // Inline function 'kotlin.math.sin' call
    var x_2 = timerBob * $this.PIf * 2.0 + 3.0;
    var bob4 = Math.sin(x_2) * 4.0;
    var tmp = MathUtils_instance;
    // Inline function 'kotlin.math.sin' call
    var x_3 = timerRot * $this.PIf * 6.0;
    var tmp$ret$4 = Math.sin(x_3);
    var rot1y = tmp.xg(tmp$ret$4 * 0.3);
    var tmp_0 = MathUtils_instance;
    // Inline function 'kotlin.math.cos' call
    var x_4 = timerRot * $this.PIf * 4.0;
    var tmp$ret$5 = Math.cos(x_4);
    var rot1x = tmp_0.xg(tmp$ret$5 * 0.3);
    var tmp_1 = MathUtils_instance;
    // Inline function 'kotlin.math.sin' call
    var x_5 = timerRot * $this.PIf * 4.0 + 2.0;
    var tmp$ret$6 = Math.sin(x_5);
    var rot2y = tmp_1.xg(tmp$ret$6 * 0.3);
    var tmp_2 = MathUtils_instance;
    // Inline function 'kotlin.math.cos' call
    var x_6 = timerRot * $this.PIf * 6.0 + 2.0;
    var tmp$ret$7 = Math.cos(x_6);
    var rot2x = tmp_2.xg(tmp$ret$7 * 0.3);
    // Inline function 'kotlin.math.sin' call
    var x_7 = timerBob * $this.PIf * 2.0;
    var bobBoat = Math.sin(x_7) * 2.0;
    var tmp_3 = $this.cr_1.commands.s(0);
    (tmp_3 instanceof DrawTransformedMeshCommand ? tmp_3 : THROW_CCE()).transform.q9_1.z = -5 + bob1;
    var tmp_4 = $this.cr_1.commands.s(1);
    (tmp_4 instanceof DrawTransformedMeshCommand ? tmp_4 : THROW_CCE()).transform.q9_1.z = -5 + bob2;
    var tmp_5 = $this.cr_1.commands.s(2);
    (tmp_5 instanceof DrawTransformedMeshCommand ? tmp_5 : THROW_CCE()).transform.q9_1.z = -5 + bob3;
    var tmp_6 = $this.cr_1.commands.s(3);
    (tmp_6 instanceof DrawTransformedMeshCommand ? tmp_6 : THROW_CCE()).transform.q9_1.z = -5 + bob4;
    var tmp_7 = $this.cr_1.commands.s(0);
    (tmp_7 instanceof DrawTransformedMeshCommand ? tmp_7 : THROW_CCE()).transform.r9_1.x = rot1x;
    var tmp_8 = $this.cr_1.commands.s(0);
    (tmp_8 instanceof DrawTransformedMeshCommand ? tmp_8 : THROW_CCE()).transform.r9_1.y = rot1y;
    var tmp_9 = $this.cr_1.commands.s(1);
    (tmp_9 instanceof DrawTransformedMeshCommand ? tmp_9 : THROW_CCE()).transform.r9_1.x = rot2x;
    var tmp_10 = $this.cr_1.commands.s(1);
    (tmp_10 instanceof DrawTransformedMeshCommand ? tmp_10 : THROW_CCE()).transform.r9_1.y = rot2y;
    var tmp_11 = $this.cr_1.commands.s(2);
    (tmp_11 instanceof DrawTransformedMeshCommand ? tmp_11 : THROW_CCE()).transform.r9_1.x = rot2x;
    var tmp_12 = $this.cr_1.commands.s(2);
    (tmp_12 instanceof DrawTransformedMeshCommand ? tmp_12 : THROW_CCE()).transform.r9_1.y = rot2y;
    var tmp_13 = $this.cr_1.commands.s(3);
    (tmp_13 instanceof DrawTransformedMeshCommand ? tmp_13 : THROW_CCE()).transform.r9_1.x = rot1x;
    var tmp_14 = $this.cr_1.commands.s(3);
    (tmp_14 instanceof DrawTransformedMeshCommand ? tmp_14 : THROW_CCE()).transform.r9_1.y = rot1y;
    var tmp_15 = $this.cr_1.commands.s(4);
    (tmp_15 instanceof DrawTransformedMeshCommand ? tmp_15 : THROW_CCE()).transform.q9_1.z = -1 + bobBoat;
  }
  function animateBirds($this) {
    var timerBob = $this.tq_1.ni(Timers_BirdBobbing_getInstance()) * 100.0;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.sin' call
    var tmp = Math.sin(timerBob);
    // Inline function 'kotlin.math.cos' call
    var x = timerBob * 3.3;
    var b = tmp + Math.cos(x) * 0.5 - 0.8;
    var a = Math.max(0.0, b);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.sin' call
    var tmp_0 = Math.sin(timerBob);
    // Inline function 'kotlin.math.sin' call
    var x_0 = timerBob * 3.2;
    var b_0 = tmp_0 + Math.sin(x_0) * 0.5 - 0.8;
    var b_1 = Math.max(0.0, b_0);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.sin' call
    var tmp_1 = Math.sin(timerBob);
    // Inline function 'kotlin.math.sin' call
    var x_1 = timerBob * 3.1;
    var b_2 = tmp_1 + Math.sin(x_1) * 0.5 - 0.8;
    var c = Math.max(0.0, b_2);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.sin' call
    var tmp_2 = Math.sin(timerBob);
    // Inline function 'kotlin.math.cos' call
    var x_2 = timerBob * 3.1;
    var b_3 = tmp_2 + Math.cos(x_2) * 0.5 - 0.8;
    var d = Math.max(0.0, b_3);
    var bob1 = a * 2.0;
    var bob2 = b_1 * 1.3;
    var bob3 = c * 2.0;
    var bob4 = d * 1.3;
    var tmp_3 = $this.dr_1.commands.s(0);
    (tmp_3 instanceof DrawTransformedMeshCommand ? tmp_3 : THROW_CCE()).transform.q9_1.z = bob1;
    var tmp_4 = $this.dr_1.commands.s(1);
    (tmp_4 instanceof DrawTransformedMeshCommand ? tmp_4 : THROW_CCE()).transform.q9_1.z = bob2;
    var tmp_5 = $this.dr_1.commands.s(2);
    (tmp_5 instanceof DrawTransformedMeshCommand ? tmp_5 : THROW_CCE()).transform.q9_1.z = -192.1 + bob3;
    var tmp_6 = $this.dr_1.commands.s(3);
    (tmp_6 instanceof DrawTransformedMeshCommand ? tmp_6 : THROW_CCE()).transform.q9_1.z = -75.1 + bob4;
  }
  function animateWater($this) {
    var preset = Presets_getInstance().nq_1[$this.settings.timeOfDay.g4_1];
    var time = $this.tq_1.ni(Timers_Water_getInstance_0());
    setUniform_1($this.er_1.uniforms.s(1), time);
    setUniform_4($this.er_1.uniforms.s(6), preset.jq_1);
    setUniform_4($this.er_1.uniforms.s(7), preset.kq_1);
    setUniform_4($this.er_1.uniforms.s(8), preset.iq_1);
    setUniform_4($this.gr_1.uniforms.s(2), preset.mq_1);
    $this.yq_1.color = preset.iq_1;
    $this.qr_1.value[0] = preset.lq_1.r;
    $this.qr_1.value[1] = preset.lq_1.g;
    $this.qr_1.value[2] = preset.lq_1.b;
  }
  function animateFishnet($this) {
    var preset = Presets_getInstance().nq_1[$this.settings.timeOfDay.g4_1];
    var time = $this.tq_1.ni(Timers_Fishnet_getInstance());
    setUniform_4($this.hr_1.uniforms.s(2), preset.kq_1);
    setUniform_1($this.hr_1.uniforms.s(3), time);
  }
  function positionCamera($this, time) {
    if ($this.useExternalViewMatrix) {
      return Unit_instance;
    }
    if ($this.settings.cameraMode.equals(CameraMode_Random_getInstance())) {
      var cameraPositionInterpolator = $this.cameraAnimator.positionInterpolator;
      var eye = cameraPositionInterpolator.cameraPosition;
      var lookat = cameraPositionInterpolator.cameraRotation;
      Matrix_getInstance().dh($this.matView, 0, eye.x, eye.y, eye.z, lookat.x, lookat.y, lookat.z, 0.0, 0.0, 1.0);
    } else if ($this.settings.cameraMode.equals(CameraMode_Orbiting_getInstance())) {
      var deltaTime = time - $this.lastFrameTime;
      var timerBobX = $this.tq_1.ni(Timers_OrbitingCameraX_getInstance());
      var timerBobZ = $this.tq_1.ni(Timers_OrbitingCameraZ_getInstance());
      $this.orbitingCamera.ri_1.cj_1 = $this.settings.cameraPeriod;
      $this.orbitingCamera.vi(deltaTime, timerBobX, timerBobZ);
      Matrix_getInstance().yg($this.orbitingCamera.ui_1, 0, $this.matView, 0, 16);
    }
  }
  function randomizeCamera($this) {
    if ($this.tq_1.ni(Timers_Camera_getInstance()) === 0.0) {
      $this.rr_1 = Default_getInstance().v5() * $this.PIf * 2.0;
      $this.sr_1 = (Default_getInstance().v5() - 0.3) * $this.PIf * 0.9;
      $this.tr_1 = Default_getInstance().v5() * $this.PIf * 2.0;
      $this.ur_1 = (Default_getInstance().v5() - 0.3) * $this.PIf * 0.9;
    } else {
      $this.rr_1 = $this.tr_1;
      $this.sr_1 = $this.ur_1;
      $this.tr_1 = Default_getInstance().v5() * $this.PIf * 2.0;
      $this.ur_1 = (Default_getInstance().v5() - 0.3) * $this.PIf * 0.9;
    }
    $this.vr_1 = 3300.0;
    $this.vr_1 = 3300.0;
  }
  function CartoonLighthouseScene() {
    Scene.call(this);
    this.tq_1 = new TimersMap();
    this.jr_1 = 45;
    this.kr_1 = 0.1;
    this.lr_1 = 0.25;
    this.mr_1 = Default_getInstance().v5() - 0.5;
    this.nr_1 = Default_getInstance().v5() - 0.5;
    this.or_1 = Default_getInstance().v5() - 0.5;
    this.pr_1 = mutableListOf([get_HINT_VRS_NONE()]);
    this.PIf = 3.1415927;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    tmp.qr_1 = UniformFloatValueWithArray(tmp$ret$0);
    this.rr_1 = 0.0;
    this.sr_1 = 0.0;
    this.tr_1 = 0.0;
    this.ur_1 = 0.0;
    this.vr_1 = 3000.0;
    this.wr_1 = 1000000.0;
    this.xr_1 = 23000.0;
    this.yr_1 = 2000.0;
    this.meshes = Meshes_getInstance_0().hq_1;
    this.textures = Textures_getInstance_0().is_1;
    this.shaders = Shaders_getInstance_0().ps_1;
    Companion_instance_0.rs(this.tq_1);
    this.Z_NEAR = 20.0;
    this.Z_FAR = 5000.0;
    this.FOV_LANDSCAPE = 70.0;
    this.FOV_PORTRAIT = 100.0;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new CartoonLighthouseSettings();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_0.cameraPeriod = 1.0;
    this_0.vignette = true;
    this_0.blurred = false;
    this_0.autoSwitchCameras = true;
    this_0.lowQuality = false;
    this_0.clock = false;
    this_0.timeOfDay = TimeOfDay_Day_getInstance_0();
    this_0.cameraMode = CameraMode_Orbiting_getInstance();
    tmp_0.settings = this_0;
    this.orbitingCamera = new OrbitingCamera(new OrbitingCameraConfig());
    this.cameraAnimator = new CameraPathAnimator(this.wr_1, this.xr_1, this.yr_1, true);
    this.cameraAnimator.setCameras(Cameras_getInstance_1().tp_1);
    this.cameraAnimator.minDurationCoefficient = this.settings.cameraPeriod;
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new ClearColorCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_1.color = new Vec4(0.0, 0.7843137254901961, 0.0, 1.0);
    this_1.name = 'clear color';
    this_1.enabled = true;
    tmp_1.yq_1 = this_1;
    var txOrigin = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 10.0, 10.0));
    var commonVertexAttributesDescriptor = new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 6)]), 12);
    var stateDiffuseColoredFp16 = new DrawMeshState(Shaders_getInstance_0().js_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), commonVertexAttributesDescriptor);
    var stateDiffuseColoredAtFp16 = new DrawMeshState(Shaders_getInstance_0().ks_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_DISABLED_getInstance(), commonVertexAttributesDescriptor);
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_2 = Meshes_getInstance_0().gq_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(this_2.length);
    var index = 0;
    var inductionVariable = 0;
    var last = this_2.length;
    while (inductionVariable < last) {
      var item = this_2[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp$ret$3 = DrawStaticMeshCommandConstructor(item, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().hs_1[tmp1]), this.qr_1]), stateDiffuseColoredFp16, txOrigin);
      destination.g(tmp$ret$3);
    }
    var drawStaticParts = copyToArray(destination);
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_3 = DrawStaticMeshCommandConstructor(Meshes_getInstance_0().xp_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().zr_1), this.qr_1]), stateDiffuseColoredAtFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_3.hints = this.pr_1;
    tmp_2.br_1 = GroupCommandArr(true, arrayConcat([drawStaticParts, [this_3]]));
    this.cr_1 = GroupCommandArr(true, [new DrawTransformedMeshCommand(Meshes_getInstance_0().yp_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().as_1), this.qr_1]), stateDiffuseColoredFp16, new AffineTranformation(new Vec3(-60.0, -215.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 10.0, 10.0))), new DrawTransformedMeshCommand(Meshes_getInstance_0().yp_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().as_1), this.qr_1]), stateDiffuseColoredFp16, new AffineTranformation(new Vec3(-80.0, -145.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 10.0, 10.0))), new DrawTransformedMeshCommand(Meshes_getInstance_0().yp_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().as_1), this.qr_1]), stateDiffuseColoredFp16, new AffineTranformation(new Vec3(80.0, -150.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 10.0, 10.0))), new DrawTransformedMeshCommand(Meshes_getInstance_0().yp_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().as_1), this.qr_1]), stateDiffuseColoredFp16, new AffineTranformation(new Vec3(64.0, 160.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 10.0, 10.0))), new DrawTransformedMeshCommand(Meshes_getInstance_0().zp_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().bs_1), this.qr_1]), stateDiffuseColoredFp16, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 10.0, 10.0)))]);
    this.dr_1 = GroupCommandArr(true, [new DrawTransformedMeshCommand(Meshes_getInstance_0().aq_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().cs_1), this.qr_1]), stateDiffuseColoredFp16, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 10.0, 10.0))), new DrawTransformedMeshCommand(Meshes_getInstance_0().bq_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().cs_1), this.qr_1]), stateDiffuseColoredFp16, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 10.0, 10.0))), new DrawTransformedMeshCommand(Meshes_getInstance_0().aq_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().cs_1), this.qr_1]), stateDiffuseColoredFp16, new AffineTranformation(new Vec3(102.7, -18.7, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 10.0, 10.0))), new DrawTransformedMeshCommand(Meshes_getInstance_0().bq_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().cs_1), this.qr_1]), stateDiffuseColoredFp16, new AffineTranformation(new Vec3(-57.7, 189.4, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 10.0, 10.0)))]);
    var stateWater = new DrawMeshState(Shaders_getInstance_0().ls_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0)), 8));
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    var tmp_4 = Meshes_getInstance_0().cq_1;
    var tmp_5 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.0]);
    var tmp_6 = UniformFloatValueWithArray(tmp$ret$8);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.002, 0.007, 0.001953125]);
    var this_4 = DrawStaticMeshCommandConstructor(tmp_4, listOf([tmp_5, tmp_6, UniformFloatValueWithArray(tmp$ret$9), UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_0().ds_1), new UniformTextureValue(Textures_getInstance_0().es_1), UniformFloatValueWithArray(new Float32Array(4)), UniformFloatValueWithArray(new Float32Array(4)), UniformFloatValueWithArray(new Float32Array(4))]), stateWater, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(2500.0, 2500.0, 1.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_4.indexUniformModel = 3;
    tmp_3.er_1 = this_4;
    var stateStars = new DrawMeshState(Shaders_getInstance_0().ms_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_FLOAT3_getInstance(), 0)), 12));
    var tmp_7 = this;
    // Inline function 'kotlin.apply' call
    var tmp_8 = Meshes_getInstance_0().dq_1;
    var tmp_9 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$11 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var this_5 = DrawStaticMeshCommandConstructor(tmp_8, listOf([tmp_9, UniformFloatValueWithArray(tmp$ret$11)]), stateStars, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(0.06, 0.06, 0.06)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_5.hints = this.pr_1;
    tmp_7.fr_1 = this_5;
    var tmp_10 = this;
    // Inline function 'kotlin.apply' call
    var tmp_11 = Meshes_getInstance_0().eq_1;
    var tmp_12 = UniformFloatValueWithArray(new Float32Array(16));
    var tmp_13 = new UniformTextureValue(Textures_getInstance_0().fs_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$13 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var this_6 = DrawStaticMeshCommandConstructor(tmp_11, listOf([tmp_12, tmp_13, UniformFloatValueWithArray(tmp$ret$13)]), stateDiffuseColoredAtFp16, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(80.0, 80.0, 80.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_6.hints = this.pr_1;
    tmp_10.gr_1 = this_6;
    var stateFishnet = new DrawMeshState(Shaders_getInstance_0().ns_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_DISABLED_getInstance(), commonVertexAttributesDescriptor);
    var tmp_14 = this;
    // Inline function 'kotlin.apply' call
    var tmp_15 = Meshes_getInstance_0().fq_1;
    var tmp_16 = UniformFloatValueWithArray(new Float32Array(16));
    var tmp_17 = new UniformTextureValue(Textures_getInstance_0().gs_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$15 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var tmp_18 = UniformFloatValueWithArray(tmp$ret$15);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$16 = new Float32Array([1.0]);
    var this_7 = DrawStaticMeshCommandConstructor(tmp_15, listOf([tmp_16, tmp_17, tmp_18, UniformFloatValueWithArray(tmp$ret$16)]), stateFishnet, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_7.hints = this.pr_1;
    tmp_14.hr_1 = this_7;
    var tmp_19 = Shaders_getInstance_0().os_1;
    // Inline function 'kotlin.apply' call
    var this_8 = new Blending();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_8.enabled = true;
    this_8.equationColor = BlendingEquation_ADD_getInstance();
    this_8.sourceFactorColor = BlendingFactor_ONE_getInstance();
    this_8.destinationFactorColor = BlendingFactor_ONE_getInstance();
    var stateWind = new DrawMeshState(tmp_19, this_8, get_DEPTH_NO_WRITE(), CullFace_DISABLED_getInstance(), null);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$19 = new Float32Array([(this.jr_1 - 1 | 0) * 2.0, this.kr_1]);
    var tmp_20 = UniformFloatValueWithArray(tmp$ret$19);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$20 = new Float32Array([0.2, 0.25, 1.3]);
    var tmp_21 = UniformFloatValueWithArray(tmp$ret$20);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$21 = new Float32Array([0.032, 0.05, 0.02]);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var windStaticUniforms = [tmp_20, tmp_21, UniformFloatValueWithArray(tmp$ret$21)];
    var tmp_22 = this;
    // Inline function 'kotlin.apply' call
    var tmp_23 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$25 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var tmp_24 = UniformFloatValueWithArray(tmp$ret$25);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$26 = new Float32Array([0.0, 0.0, 0.0]);
    var this_9 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[tmp_23, tmp_24, UniformFloatValueWithArray(tmp$ret$26)], windStaticUniforms])), stateWind, new AffineTranformation(new Vec3(0.0, -500.0, 130.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 1.0, 10.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_9.primitiveCount = imul(6, this.jr_1);
    this_9.primitiveDrawType = PrimitiveDrawType_NON_INDEXED_getInstance();
    var tmp_25 = this_9;
    // Inline function 'kotlin.apply' call
    var tmp_26 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$28 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var tmp_27 = UniformFloatValueWithArray(tmp$ret$28);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$29 = new Float32Array([0.0, 0.0, 0.0]);
    var this_10 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[tmp_26, tmp_27, UniformFloatValueWithArray(tmp$ret$29)], windStaticUniforms])), stateWind, new AffineTranformation(new Vec3(0.0, -500.0, 130.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 1.0, 10.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_10.primitiveCount = imul(6, this.jr_1);
    this_10.primitiveDrawType = PrimitiveDrawType_NON_INDEXED_getInstance();
    var tmp_28 = this_10;
    // Inline function 'kotlin.apply' call
    var tmp_29 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$31 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var tmp_30 = UniformFloatValueWithArray(tmp$ret$31);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$32 = new Float32Array([0.0, 0.0, 0.0]);
    var this_11 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[tmp_29, tmp_30, UniformFloatValueWithArray(tmp$ret$32)], windStaticUniforms])), stateWind, new AffineTranformation(new Vec3(0.0, -500.0, 130.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 1.0, 10.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_11.primitiveCount = imul(6, this.jr_1);
    this_11.primitiveDrawType = PrimitiveDrawType_NON_INDEXED_getInstance();
    var tmp_31 = this_11;
    // Inline function 'kotlin.apply' call
    var tmp_32 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$34 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var tmp_33 = UniformFloatValueWithArray(tmp$ret$34);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$35 = new Float32Array([0.0, 0.0, 0.0]);
    var this_12 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[tmp_32, tmp_33, UniformFloatValueWithArray(tmp$ret$35)], windStaticUniforms])), stateWind, new AffineTranformation(new Vec3(0.0, -500.0, 100.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 1.0, 10.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_12.primitiveCount = imul(6, this.jr_1);
    this_12.primitiveDrawType = PrimitiveDrawType_NON_INDEXED_getInstance();
    var tmp_34 = this_12;
    // Inline function 'kotlin.apply' call
    var tmp_35 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$37 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var tmp_36 = UniformFloatValueWithArray(tmp$ret$37);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$38 = new Float32Array([0.0, 0.0, 0.0]);
    var this_13 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[tmp_35, tmp_36, UniformFloatValueWithArray(tmp$ret$38)], windStaticUniforms])), stateWind, new AffineTranformation(new Vec3(0.0, -500.0, 100.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 1.0, 10.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_13.primitiveCount = imul(6, this.jr_1);
    this_13.primitiveDrawType = PrimitiveDrawType_NON_INDEXED_getInstance();
    var tmp_37 = this_13;
    // Inline function 'kotlin.apply' call
    var tmp_38 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$40 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var tmp_39 = UniformFloatValueWithArray(tmp$ret$40);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$41 = new Float32Array([0.0, 0.0, 0.0]);
    var this_14 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[tmp_38, tmp_39, UniformFloatValueWithArray(tmp$ret$41)], windStaticUniforms])), stateWind, new AffineTranformation(new Vec3(0.0, -500.0, 100.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 1.0, 10.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_14.primitiveCount = imul(6, this.jr_1);
    this_14.primitiveDrawType = PrimitiveDrawType_NON_INDEXED_getInstance();
    var tmp_40 = this_14;
    // Inline function 'kotlin.apply' call
    var tmp_41 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$43 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var tmp_42 = UniformFloatValueWithArray(tmp$ret$43);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$44 = new Float32Array([0.0, 0.0, 0.0]);
    var this_15 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[tmp_41, tmp_42, UniformFloatValueWithArray(tmp$ret$44)], windStaticUniforms])), stateWind, new AffineTranformation(new Vec3(0.0, -500.0, 170.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 1.0, 10.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_15.primitiveCount = imul(6, this.jr_1);
    this_15.primitiveDrawType = PrimitiveDrawType_NON_INDEXED_getInstance();
    var tmp_43 = this_15;
    // Inline function 'kotlin.apply' call
    var tmp_44 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$46 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var tmp_45 = UniformFloatValueWithArray(tmp$ret$46);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$47 = new Float32Array([0.0, 0.0, 0.0]);
    var this_16 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[tmp_44, tmp_45, UniformFloatValueWithArray(tmp$ret$47)], windStaticUniforms])), stateWind, new AffineTranformation(new Vec3(0.0, -500.0, 170.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 1.0, 10.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_16.primitiveCount = imul(6, this.jr_1);
    this_16.primitiveDrawType = PrimitiveDrawType_NON_INDEXED_getInstance();
    var tmp_46 = this_16;
    // Inline function 'kotlin.apply' call
    var tmp_47 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$49 = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    var tmp_48 = UniformFloatValueWithArray(tmp$ret$49);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$50 = new Float32Array([0.0, 0.0, 0.0]);
    var this_17 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[tmp_47, tmp_48, UniformFloatValueWithArray(tmp$ret$50)], windStaticUniforms])), stateWind, new AffineTranformation(new Vec3(0.0, -500.0, 170.0), new Vec3(0.0, 0.0, 0.0), new Vec3(10.0, 1.0, 10.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_17.primitiveCount = imul(6, this.jr_1);
    this_17.primitiveDrawType = PrimitiveDrawType_NON_INDEXED_getInstance();
    tmp_22.ir_1 = GroupCommandArr(true, [tmp_25, tmp_28, tmp_31, tmp_34, tmp_37, tmp_40, tmp_43, tmp_46, this_17]);
    var tmp_49 = this;
    // Inline function 'kotlin.apply' call
    var this_18 = new ClearCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_18.clearType = ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
    tmp_49.xq_1 = GroupCommandArr(true, [this.yq_1, this_18]);
    var tmp_50 = this;
    // Inline function 'kotlin.apply' call
    var this_19 = new VignetteCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_19.color0 = new Vec4(0.7, 0.7, 0.7, 1.0);
    this_19.color1 = new Vec4(1.0, 1.0, 1.0, 1.0);
    tmp_50.zq_1 = this_19;
    this.uq_1 = GroupCommandArr(true, [MainPassCommandArr(true, [this.xq_1, this.br_1, this.cr_1, this.dr_1, this.hr_1, this.er_1, this.fr_1, this.gr_1, this.ir_1, this.zq_1])]);
    var tmp_51 = this;
    // Inline function 'kotlin.apply' call
    var this_20 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_20.name = 'blurred-main';
    this_20.enabled = true;
    this_20.minSize = 180;
    this_20.brightness = 0.9;
    this_20.blurSize = BlurSize_KERNEL_4_getInstance();
    this_20.commands = mutableListOf([this.xq_1, this.br_1, this.cr_1, this.dr_1, this.hr_1, this.er_1, this.gr_1, this.zq_1]);
    tmp_51.wq_1 = this_20;
    var tmp_52 = this;
    // Inline function 'kotlin.apply' call
    var this_21 = new DrawBlurredCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.CartoonLighthouseScene.<anonymous>' call
    this_21.name = 'draw blurred';
    this_21.blending = get_BLENDING_NONE();
    tmp_52.ar_1 = this_21;
    this.vq_1 = GroupCommandArr(false, [this.wq_1, MainPassCommandArr(true, [this.xq_1, this.ar_1])]);
    this.commands = mutableListOf([this.uq_1, this.vq_1]);
  }
  protoOf(CartoonLighthouseScene).in = function () {
    return this.settings;
  };
  protoOf(CartoonLighthouseScene).yn = function () {
    return this.PIf;
  };
  protoOf(CartoonLighthouseScene).gn = function () {
    return this.cameraAnimator;
  };
  protoOf(CartoonLighthouseScene).ss = function () {
    return this.orbitingCamera;
  };
  protoOf(CartoonLighthouseScene).updateTimers = function (time) {
    this.tq_1.qi(time);
    this.cameraAnimator.animate(time);
    animate(this, time);
    protoOf(Scene).updateTimers.call(this, time);
  };
  protoOf(CartoonLighthouseScene).updateViewportSize = function (width, height) {
    protoOf(Scene).updateViewportSize.call(this, width, height);
  };
  protoOf(CartoonLighthouseScene).initialize = function () {
    randomizeCamera(this);
  };
  protoOf(CartoonLighthouseScene).nextCamera = function () {
    this.randomCamera();
  };
  protoOf(CartoonLighthouseScene).randomCamera = function () {
    if (this.cameraAnimator.state.equals(CameraState_TRANSITIONING_getInstance())) {
      return Unit_instance;
    }
    this.cameraAnimator.positionInterpolator.reverse = Default_getInstance().v5() < 0.5;
    this.cameraAnimator.randomCamera();
  };
  protoOf(CartoonLighthouseScene).cameraImpulse = function (impulse) {
    this.orbitingCamera.ti_1 = impulse * this.settings.cameraPeriod;
  };
  var TimeOfDay_Day_instance_0;
  var TimeOfDay_Night_instance_0;
  var TimeOfDay_Sunrise_instance_0;
  var TimeOfDay_Sunset_instance_0;
  function values_0() {
    return [TimeOfDay_Day_getInstance_0(), TimeOfDay_Night_getInstance_0(), TimeOfDay_Sunrise_getInstance_0(), TimeOfDay_Sunset_getInstance_0()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Day':
        return TimeOfDay_Day_getInstance_0();
      case 'Night':
        return TimeOfDay_Night_getInstance_0();
      case 'Sunrise':
        return TimeOfDay_Sunrise_getInstance_0();
      case 'Sunset':
        return TimeOfDay_Sunset_getInstance_0();
      default:
        TimeOfDay_initEntries_0();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var TimeOfDay_entriesInitialized_0;
  function TimeOfDay_initEntries_0() {
    if (TimeOfDay_entriesInitialized_0)
      return Unit_instance;
    TimeOfDay_entriesInitialized_0 = true;
    TimeOfDay_Day_instance_0 = new TimeOfDay_0('Day', 0, 0);
    TimeOfDay_Night_instance_0 = new TimeOfDay_0('Night', 1, 1);
    TimeOfDay_Sunrise_instance_0 = new TimeOfDay_0('Sunrise', 2, 2);
    TimeOfDay_Sunset_instance_0 = new TimeOfDay_0('Sunset', 3, 3);
  }
  function TimeOfDay_0(name, ordinal, value) {
    Enum.call(this, name, ordinal);
  }
  var CameraMode_Random_instance;
  var CameraMode_Orbiting_instance;
  function values_1() {
    return [CameraMode_Random_getInstance(), CameraMode_Orbiting_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Random':
        return CameraMode_Random_getInstance();
      case 'Orbiting':
        return CameraMode_Orbiting_getInstance();
      default:
        CameraMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var CameraMode_entriesInitialized;
  function CameraMode_initEntries() {
    if (CameraMode_entriesInitialized)
      return Unit_instance;
    CameraMode_entriesInitialized = true;
    CameraMode_Random_instance = new CameraMode('Random', 0, 0);
    CameraMode_Orbiting_instance = new CameraMode('Orbiting', 1, 1);
  }
  function CameraMode(name, ordinal, value) {
    Enum.call(this, name, ordinal);
  }
  function CartoonLighthouseSettings() {
    this.cameraPeriod = 1.0;
    this.vignette = true;
    this.blurred = false;
    this.autoSwitchCameras = true;
    this.lowQuality = false;
    this.clock = false;
    this.timeOfDay = TimeOfDay_Day_getInstance_0();
    this.cameraMode = CameraMode_Random_getInstance();
    this.debugDouble = 1.0;
    this.debugFloat = 1.0;
    this.debugString = '';
  }
  protoOf(CartoonLighthouseSettings).bo = function (_set____db54di) {
    this.cameraPeriod = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).co = function () {
    return this.cameraPeriod;
  };
  protoOf(CartoonLighthouseSettings).do = function (_set____db54di) {
    this.vignette = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).eo = function () {
    return this.vignette;
  };
  protoOf(CartoonLighthouseSettings).fo = function (_set____db54di) {
    this.blurred = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).go = function () {
    return this.blurred;
  };
  protoOf(CartoonLighthouseSettings).ho = function (_set____db54di) {
    this.autoSwitchCameras = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).io = function () {
    return this.autoSwitchCameras;
  };
  protoOf(CartoonLighthouseSettings).no = function (_set____db54di) {
    this.lowQuality = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).oo = function () {
    return this.lowQuality;
  };
  protoOf(CartoonLighthouseSettings).lo = function (_set____db54di) {
    this.clock = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).mo = function () {
    return this.clock;
  };
  protoOf(CartoonLighthouseSettings).xs = function (_set____db54di) {
    this.timeOfDay = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).ko = function () {
    return this.timeOfDay;
  };
  protoOf(CartoonLighthouseSettings).ys = function (_set____db54di) {
    this.cameraMode = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).zs = function () {
    return this.cameraMode;
  };
  protoOf(CartoonLighthouseSettings).at = function (_set____db54di) {
    this.debugDouble = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).bt = function () {
    return this.debugDouble;
  };
  protoOf(CartoonLighthouseSettings).ct = function (_set____db54di) {
    this.debugFloat = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).dt = function () {
    return this.debugFloat;
  };
  protoOf(CartoonLighthouseSettings).et = function (_set____db54di) {
    this.debugString = _set____db54di;
  };
  protoOf(CartoonLighthouseSettings).ft = function () {
    return this.debugString;
  };
  function TimeOfDay_Day_getInstance_0() {
    TimeOfDay_initEntries_0();
    return TimeOfDay_Day_instance_0;
  }
  function TimeOfDay_Night_getInstance_0() {
    TimeOfDay_initEntries_0();
    return TimeOfDay_Night_instance_0;
  }
  function TimeOfDay_Sunrise_getInstance_0() {
    TimeOfDay_initEntries_0();
    return TimeOfDay_Sunrise_instance_0;
  }
  function TimeOfDay_Sunset_getInstance_0() {
    TimeOfDay_initEntries_0();
    return TimeOfDay_Sunset_instance_0;
  }
  function CameraMode_Random_getInstance() {
    CameraMode_initEntries();
    return CameraMode_Random_instance;
  }
  function CameraMode_Orbiting_getInstance() {
    CameraMode_initEntries();
    return CameraMode_Orbiting_instance;
  }
  function Shaders_0() {
    Shaders_instance_0 = this;
    this.js_1 = new Shader('DiffuseColored');
    this.ks_1 = new Shader('DiffuseColoredAt');
    this.ls_1 = new Shader('StylizedWater');
    this.ms_1 = new Shader('Color');
    this.ns_1 = new Shader('Fishnet');
    this.os_1 = new Shader('Wind');
    this.ps_1 = mutableListOf([this.js_1, this.ks_1, this.ls_1, this.ms_1, this.ns_1, this.os_1]);
  }
  var Shaders_instance_0;
  function Shaders_getInstance_0() {
    if (Shaders_instance_0 == null)
      new Shaders_0();
    return Shaders_instance_0;
  }
  function SimpleTexture(name, mipmaps) {
    this.gt_1 = name;
    this.ht_1 = mipmaps;
  }
  protoOf(SimpleTexture).toString = function () {
    return 'SimpleTexture(name=' + this.gt_1 + ', mipmaps=' + this.ht_1 + ')';
  };
  protoOf(SimpleTexture).hashCode = function () {
    var result = getStringHashCode(this.gt_1);
    result = imul(result, 31) + this.ht_1 | 0;
    return result;
  };
  protoOf(SimpleTexture).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SimpleTexture))
      return false;
    var tmp0_other_with_cast = other instanceof SimpleTexture ? other : THROW_CCE();
    if (!(this.gt_1 === tmp0_other_with_cast.gt_1))
      return false;
    if (!(this.ht_1 === tmp0_other_with_cast.ht_1))
      return false;
    return true;
  };
  function Textures_0() {
    Textures_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.Textures.texGrass.<anonymous>' call
    this_0.name = 'grass';
    this_0.fileName = 'grass';
    this_0.format = TextureFormat_ASTC_getInstance();
    this_0.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    this_0.minFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
    this_0.magFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
    this_0.mipmaps = 8;
    tmp.zr_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.Textures.texBouy.<anonymous>' call
    this_1.name = 'bouy1';
    this_1.fileName = 'bouy1';
    this_1.format = TextureFormat_ASTC_getInstance();
    this_1.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    this_1.minFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
    this_1.magFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
    this_1.mipmaps = 4;
    tmp_0.as_1 = this_1;
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var this_2 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.Textures.texBoat.<anonymous>' call
    this_2.name = 'boat';
    this_2.fileName = 'boat';
    this_2.format = TextureFormat_ASTC_getInstance();
    this_2.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    this_2.minFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
    this_2.magFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
    this_2.mipmaps = 8;
    tmp_1.bs_1 = this_2;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_3 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.Textures.texBird.<anonymous>' call
    this_3.name = 'bird';
    this_3.fileName = 'bird';
    this_3.format = TextureFormat_ASTC_getInstance();
    this_3.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    this_3.minFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
    this_3.magFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
    this_3.mipmaps = 7;
    tmp_2.cs_1 = this_3;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    var this_4 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.Textures.texWaterNoise.<anonymous>' call
    this_4.name = 'water-noise';
    this_4.fileName = 'water-noise';
    this_4.format = TextureFormat_ASTC_getInstance();
    this_4.wrapping = TextureWrapping_REPEAT_getInstance();
    this_4.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_4.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_4.mipmaps = 7;
    tmp_3.ds_1 = this_4;
    var tmp_4 = this;
    // Inline function 'kotlin.apply' call
    var this_5 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.Textures.texWaterMask.<anonymous>' call
    this_5.name = 'water-mask';
    this_5.fileName = 'water-mask';
    this_5.format = TextureFormat_ASTC_getInstance();
    this_5.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    this_5.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_5.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_5.anisotropy = 4;
    this_5.mipmaps = 6;
    tmp_4.es_1 = this_5;
    var tmp_5 = this;
    // Inline function 'kotlin.apply' call
    var this_6 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.Textures.texClouds.<anonymous>' call
    this_6.name = 'clouds';
    this_6.fileName = 'clouds';
    this_6.format = TextureFormat_ASTC_getInstance();
    this_6.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    this_6.minFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
    this_6.magFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
    this_6.mipmaps = 8;
    tmp_5.fs_1 = this_6;
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_7 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonlighthouse.Textures.texFishnet.<anonymous>' call
    this_7.name = 'fishnet';
    this_7.fileName = 'fishnet';
    this_7.format = TextureFormat_ASTC_getInstance();
    this_7.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    this_7.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_7.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_7.anisotropy = 3;
    this_7.mipmaps = 8;
    tmp_6.gs_1 = this_7;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var this_8 = [new SimpleTexture('arrow', 7), new SimpleTexture('barrel', 8), new SimpleTexture('box', 8), new SimpleTexture('bricks', 8), new SimpleTexture('dock', 9), new SimpleTexture('fence', 9), new SimpleTexture('fence_topLighthouse', 8), new SimpleTexture('fish', 7), new SimpleTexture('fishingspot', 8), new SimpleTexture('fish_rope', 2), new SimpleTexture('hengel', 3), new SimpleTexture('house', 9), new SimpleTexture('lifebouy-rope', 7), new SimpleTexture('lifebouy', 7), new SimpleTexture('lighthouse', 10), new SimpleTexture('poles', 8), new SimpleTexture('rock', 8), new SimpleTexture('roof-tile', 7), new SimpleTexture('sign', 7), new SimpleTexture('smallPoles', 8), new SimpleTexture('SupportBeams', 8), new SimpleTexture('telescope', 9), new SimpleTexture('tree', 8)];
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_8.length);
    var inductionVariable = 0;
    var last = this_8.length;
    while (inductionVariable < last) {
      var item = this_8[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.androidworks.cartoonlighthouse.Textures.staticTextures.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_9 = new Texture();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.androidworks.cartoonlighthouse.Textures.staticTextures.<anonymous>.<anonymous>' call
      this_9.name = item.gt_1;
      this_9.fileName = item.gt_1;
      this_9.format = TextureFormat_ASTC_getInstance();
      this_9.wrapping = TextureWrapping_REPEAT_getInstance();
      this_9.minFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
      this_9.magFilter = TextureFiltering_LINEAR_MIPMAP_NEAREST_getInstance();
      this_9.mipmaps = item.ht_1;
      destination.g(this_9);
    }
    tmp_7.hs_1 = copyToArray(destination);
    this.is_1 = mutableListOf(arrayConcat([this.hs_1, [this.zr_1, this.as_1, this.bs_1, this.cs_1, this.es_1, this.ds_1, this.fs_1, this.gs_1]]));
  }
  var Textures_instance_0;
  function Textures_getInstance_0() {
    if (Textures_instance_0 == null)
      new Textures_0();
    return Textures_instance_0;
  }
  var Timers_Camera_instance_0;
  var Timers_Water_instance_0;
  var Timers_BouysBobbing_instance;
  var Timers_BouysRotation_instance;
  var Timers_BirdBobbing_instance;
  var Timers_Fishnet_instance;
  var Timers_WindMove1_instance;
  var Timers_WindMove2_instance;
  var Timers_WindMove3_instance;
  var Timers_OrbitingCameraZ_instance;
  var Timers_OrbitingCameraX_instance;
  function Companion_0() {
    this.qs_1 = 27800.0;
  }
  protoOf(Companion_0).rs = function (timers) {
    timers.mi(Timers_Camera_getInstance(), this.qs_1, true);
    timers.mi(Timers_Water_getInstance_0(), 25000.0, true);
    timers.mi(Timers_BouysBobbing_getInstance(), 2000.0, true);
    timers.mi(Timers_BouysRotation_getInstance(), 8000.0, true);
    timers.mi(Timers_BirdBobbing_getInstance(), 15000.0, true);
    timers.mi(Timers_Fishnet_getInstance(), 2000.0, true);
    timers.mi(Timers_WindMove1_getInstance(), 7000.0, true);
    timers.mi(Timers_WindMove2_getInstance(), 7500.0, true);
    timers.mi(Timers_WindMove3_getInstance(), 8000.0, true);
    timers.mi(Timers_OrbitingCameraZ_getInstance(), 42000.0, true);
    timers.mi(Timers_OrbitingCameraX_getInstance(), 32000.0, true);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  var Timers_entriesInitialized_0;
  function Timers_initEntries_0() {
    if (Timers_entriesInitialized_0)
      return Unit_instance;
    Timers_entriesInitialized_0 = true;
    Timers_Camera_instance_0 = new Timers_0('Camera', 0);
    Timers_Water_instance_0 = new Timers_0('Water', 1);
    Timers_BouysBobbing_instance = new Timers_0('BouysBobbing', 2);
    Timers_BouysRotation_instance = new Timers_0('BouysRotation', 3);
    Timers_BirdBobbing_instance = new Timers_0('BirdBobbing', 4);
    Timers_Fishnet_instance = new Timers_0('Fishnet', 5);
    Timers_WindMove1_instance = new Timers_0('WindMove1', 6);
    Timers_WindMove2_instance = new Timers_0('WindMove2', 7);
    Timers_WindMove3_instance = new Timers_0('WindMove3', 8);
    Timers_OrbitingCameraZ_instance = new Timers_0('OrbitingCameraZ', 9);
    Timers_OrbitingCameraX_instance = new Timers_0('OrbitingCameraX', 10);
  }
  function Timers_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Timers_Camera_getInstance() {
    Timers_initEntries_0();
    return Timers_Camera_instance_0;
  }
  function Timers_Water_getInstance_0() {
    Timers_initEntries_0();
    return Timers_Water_instance_0;
  }
  function Timers_BouysBobbing_getInstance() {
    Timers_initEntries_0();
    return Timers_BouysBobbing_instance;
  }
  function Timers_BouysRotation_getInstance() {
    Timers_initEntries_0();
    return Timers_BouysRotation_instance;
  }
  function Timers_BirdBobbing_getInstance() {
    Timers_initEntries_0();
    return Timers_BirdBobbing_instance;
  }
  function Timers_Fishnet_getInstance() {
    Timers_initEntries_0();
    return Timers_Fishnet_instance;
  }
  function Timers_WindMove1_getInstance() {
    Timers_initEntries_0();
    return Timers_WindMove1_instance;
  }
  function Timers_WindMove2_getInstance() {
    Timers_initEntries_0();
    return Timers_WindMove2_instance;
  }
  function Timers_WindMove3_getInstance() {
    Timers_initEntries_0();
    return Timers_WindMove3_instance;
  }
  function Timers_OrbitingCameraZ_getInstance() {
    Timers_initEntries_0();
    return Timers_OrbitingCameraZ_instance;
  }
  function Timers_OrbitingCameraX_getInstance() {
    Timers_initEntries_0();
    return Timers_OrbitingCameraX_instance;
  }
  function Meshes_1() {
    Meshes_instance_1 = this;
    this.it_1 = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0), new MeshAttribute(AttributeType_UV0_getInstance(), VertexFormat_HALF2_getInstance(), 6)]), 12);
    this.jt_1 = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0), new MeshAttribute(AttributeType_UV0_getInstance(), VertexFormat_HALF2_getInstance(), 6), new MeshAttribute(AttributeType_NORMAL_getInstance(), VertexFormat_HALF3_getInstance(), 10)]), 16);
    this.kt_1 = MeshConstructor2('sky', this.it_1);
    this.lt_1 = MeshConstructor2('quad', this.it_1);
    this.mt_1 = MeshConstructor2('plane0', this.jt_1);
    this.nt_1 = MeshConstructor2('plane1', this.jt_1);
    this.ot_1 = mutableListOf([this.kt_1, this.lt_1, this.mt_1, this.nt_1]);
  }
  var Meshes_instance_1;
  function Meshes_getInstance_1() {
    if (Meshes_instance_1 == null)
      new Meshes_1();
    return Meshes_instance_1;
  }
  function Props() {
    Props_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [new Vec3(-950.0, 0.0, 29.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [new Vec3(-1113.0, 0.0, 343.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = [new Vec3(-1080.0, 0.0, 116.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = [new Vec3(-1113.0, 0.0, 105.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = [new Vec3(-1129.0, -986.0, 705.0), new Vec3(-1129.0, 986.0, 705.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = [new Vec3(-967.0, 0.0, -196.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = [new Vec3(-1422.0, -21.0, 64.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = [new Vec3(-1032.0, 0.0, 46.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = [new Vec3(220.0, 0.0, 116.0), new Vec3(-722.0, -368.0, 151.0), new Vec3(-722.0, 368.0, 151.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = [new Vec3(-1000.0, -570.0, -58.0), new Vec3(-1000.0, 570.0, -58.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = [new Vec3(-1000.0, 0.0, 168.0)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pt_1 = [tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, [new Vec3(-224.0, -823.0, 515.0), new Vec3(-224.0, 823.0, 515.0)]];
    var tmp_11 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_11.qt_1 = new Float32Array([1.4, 1.1, 1.2, 1.5, 1.2, 1.8, 1.6, 1.1, 0.7, 1.1, 1.8, 1.2]);
  }
  var Props_instance;
  function Props_getInstance() {
    if (Props_instance == null)
      new Props();
    return Props_instance;
  }
  function applySettings_0($this) {
    $this.uu_1.v(0, $this.settings.lowQuality ? get_HINT_VRS_2X2() : get_HINT_VRS_NONE());
    $this.du_1.enabled = !$this.settings.blurred;
    $this.eu_1.enabled = $this.settings.blurred;
    $this.iu_1.enabled = $this.settings.vignette;
    $this.fu_1.additionalBlur = !$this.settings.lowQuality;
    $this.iu_1.enabled = !$this.settings.lowQuality;
    var cameraPeriod = $this.settings.cameraPeriod * Companion_instance_1.fv_1;
    var params = $this.wt_1.pi(Timers_Camera_getInstance_0());
    if (!(params.hi_1 === cameraPeriod)) {
      $this.wt_1.mi(Timers_Camera_getInstance_0(), cameraPeriod, false);
      $this.wt_1.oi(Timers_Camera_getInstance_0(), 0.0);
    }
  }
  function animate_0($this) {
    applySettings_0($this);
    positionCamera_0($this);
    $this.calculateProjection();
    calculatePlanePosition($this, $this.yu_1, 0.0);
    updatePlaneTransforms($this, true);
    updatePlaneTransforms($this, false);
    updateSky($this);
    $this.updateMeshTransformations($this.commands);
  }
  function updateSky($this) {
    var timer = $this.wt_1.ni(Timers_SwapSky_getInstance());
    if (timer > 0.1 ? timer < 0.9 : false) {
      $this.lu_1.enabled = false;
      $this.ku_1.enabled = true;
      setUniform_1($this.ku_1.uniforms.s(4), timer);
      $this.ku_1.transform.q9_1 = $this.ev_1;
    } else {
      $this.lu_1.enabled = true;
      $this.ku_1.enabled = false;
      $this.lu_1.transform.q9_1 = $this.ev_1;
    }
    if (timer > 0.5) {
      $this.texSky.id = $this.texSky2.id;
      $this.texSky.fileName = $this.texSky2.fileName;
    }
    // Inline function 'kotlin.math.sin' call
    var x = timer * $this.PIf * 2.0 - $this.PIf * 0.5;
    var sineInOut = (Math.sin(x) + 1.0) * 0.5;
    var dimming = sineInOut * 0.5;
    $this.iu_1.color0.x = 0.7 - dimming;
    $this.iu_1.color0.y = 0.7 - dimming;
    $this.iu_1.color0.z = 0.7 - dimming;
  }
  function updatePlaneTransforms($this, current) {
    var txPlane = current ? $this.tu_1 : $this.su_1;
    var groupProps = current ? $this.ru_1 : $this.qu_1;
    var props = Props_getInstance().pt_1[current ? $this.settings.nextPlane : $this.settings.currentPlane];
    var phase = current ? 0.0 : 0.0;
    var scaleProps = Props_getInstance().qt_1[current ? $this.settings.nextPlane : $this.settings.currentPlane] * $this.bu_1;
    var commandDiffuse = current ? $this.ou_1 : $this.mu_1;
    var commandOutline = current ? $this.pu_1 : $this.nu_1;
    var timer = $this.wt_1.ni(Timers_SwapPlanes_getInstance());
    var scale = current ? MathUtils_instance.cd(0.0, 0.3, timer) : 1.0 - MathUtils_instance.cd(0.0, 1.0, timer);
    var timerOffset = MathUtils_instance.wg(0.0, 1.0, timer);
    var offsetZ = current ? 18000.0 * (1.0 - timerOffset) : timerOffset * -12000.0;
    var offsetX = current ? offsetZ * 0.25 : offsetZ * 1.3;
    txPlane.q9_1.x = $this.wu_1.x + offsetX;
    txPlane.q9_1.y = $this.wu_1.y;
    txPlane.q9_1.z = $this.wu_1.z + offsetZ;
    txPlane.r9_1.x = MathUtils_instance.xg($this.xu_1);
    txPlane.s9_1.x = $this.au_1 * scale;
    txPlane.s9_1.y = $this.au_1 * scale;
    txPlane.s9_1.z = $this.au_1 * scale;
    var tmp0_iterator = groupProps.commands.j();
    while (tmp0_iterator.q()) {
      var command = tmp0_iterator.r();
      command.enabled = false;
    }
    if (scale === 0.0) {
      commandDiffuse.enabled = false;
      commandOutline.enabled = false;
    } else {
      commandDiffuse.enabled = true;
      commandOutline.enabled = true;
    }
    if (scale > 0.33) {
      var inductionVariable = 0;
      var last = props.length;
      while (inductionVariable < last) {
        var propIndex = inductionVariable;
        var prop = props[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = prop.y;
        // Inline function 'kotlin.math.cos' call
        var x = $this.xu_1;
        var tmp_0 = tmp * Math.cos(x);
        var tmp_1 = prop.z;
        // Inline function 'kotlin.math.sin' call
        var x_0 = $this.xu_1;
        var propY = tmp_0 - tmp_1 * Math.sin(x_0);
        var tmp_2 = prop.z;
        // Inline function 'kotlin.math.cos' call
        var x_1 = $this.xu_1;
        var tmp_3 = tmp_2 * Math.cos(x_1);
        var tmp_4 = prop.y;
        // Inline function 'kotlin.math.sin' call
        var x_2 = $this.xu_1;
        var propZ = tmp_3 + tmp_4 * Math.sin(x_2);
        var rotation = MathUtils_instance.xg($this.wt_1.ni(Timers_PropRotate_getInstance()) * $this.PIf * 2.0 + propIndex + phase);
        // Inline function 'kotlin.math.sin' call
        var x_3 = $this.wt_1.ni(Timers_PropFlicker_getInstance()) * $this.PIf * 2.0 + propIndex + phase;
        var brightness = 2.0 + Math.sin(x_3);
        var tmp_5 = groupProps.commands.s(propIndex);
        var command_0 = tmp_5 instanceof DrawTransformedMeshCommand ? tmp_5 : THROW_CCE();
        command_0.enabled = true;
        setUniform_1(command_0.uniforms.s(2), brightness);
        command_0.transform.r9_1.x = MathUtils_instance.xg(rotation);
        command_0.transform.r9_1.y = 0.0;
        command_0.transform.r9_1.z = 0.0;
        command_0.transform.q9_1.x = ($this.wu_1.x + prop.x) * scale + offsetX;
        command_0.transform.q9_1.y = ($this.wu_1.y + propY) * scale;
        command_0.transform.q9_1.z = ($this.wu_1.z + propZ) * scale + offsetZ;
        command_0.transform.s9_1.x = scaleProps * scale;
        command_0.transform.s9_1.y = scaleProps * scale;
        command_0.transform.s9_1.z = scaleProps * scale;
      }
    }
  }
  function positionCamera_0($this) {
    if (!$this.useExternalViewMatrix) {
      var timer = $this.wt_1.ni(Timers_Camera_getInstance_0());
      timer = MathUtils_instance.cd(0.0, 1.0, timer);
      var angleX = $this.zu_1 + timer * ($this.bv_1 - $this.zu_1);
      var angleY = $this.av_1 + timer * ($this.cv_1 - $this.av_1);
      var tmp = $this.ev_1;
      // Inline function 'kotlin.math.sin' call
      tmp.x = Math.sin(angleX) * $this.dv_1;
      var tmp_0 = $this.ev_1;
      // Inline function 'kotlin.math.cos' call
      tmp_0.y = Math.cos(angleX) * $this.dv_1;
      var tmp_1 = $this.ev_1;
      // Inline function 'kotlin.math.sin' call
      tmp_1.z = Math.sin(angleY) * $this.dv_1;
      Matrix_getInstance().dh($this.matView, 0, $this.ev_1.x, $this.ev_1.y, $this.ev_1.z, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
      if (timer === 1.0) {
        randomizeCamera_0($this);
        $this.wt_1.oi(Timers_Camera_getInstance_0(), 0.0);
      }
    }
  }
  function calculatePlanePosition($this, offset, timersOffset) {
    var time1 = ($this.wt_1.ni(Timers_PlaneWonder1_getInstance()) + timersOffset) % 1.0;
    var time2 = ($this.wt_1.ni(Timers_PlaneWonder2_getInstance()) + timersOffset) % 1.0;
    var tmp = offset.x;
    // Inline function 'kotlin.math.sin' call
    var x = time1 * 3.0 * $this.PIf * 2.0;
    var tmp$ret$0 = Math.sin(x);
    $this.wu_1.x = tmp + tmp$ret$0 * $this.yt_1 * 3.0;
    var tmp_0 = offset.y;
    // Inline function 'kotlin.math.cos' call
    var x_0 = time1 * 5.0 * $this.PIf * 2.0;
    var tmp$ret$1 = Math.cos(x_0);
    $this.wu_1.y = tmp_0 + tmp$ret$1 * $this.yt_1;
    var tmp_1 = offset.z;
    // Inline function 'kotlin.math.cos' call
    var x_1 = time2 * $this.PIf * 2.0;
    var tmp$ret$2 = Math.cos(x_1);
    $this.wu_1.z = tmp_1 + tmp$ret$2 * $this.zt_1;
    var tmp_2 = $this;
    // Inline function 'kotlin.math.sin' call
    var x_2 = $this.wt_1.ni(Timers_PlaneBanking_getInstance()) * $this.PIf * 2.0;
    tmp_2.xu_1 = Math.sin(x_2) * $this.xt_1 * 1.0;
  }
  function randomizeCamera_0($this) {
    if ($this.wt_1.ni(Timers_Camera_getInstance_0()) === 0.0) {
      $this.zu_1 = Default_getInstance().v5() * $this.PIf * 2.0;
      $this.av_1 = (Default_getInstance().v5() - 0.3) * $this.PIf * 0.9;
      $this.bv_1 = Default_getInstance().v5() * $this.PIf * 2.0;
      $this.cv_1 = (Default_getInstance().v5() - 0.3) * $this.PIf * 0.9;
    } else {
      $this.zu_1 = $this.bv_1;
      $this.av_1 = $this.cv_1;
      $this.bv_1 = Default_getInstance().v5() * $this.PIf * 2.0;
      $this.cv_1 = (Default_getInstance().v5() - 0.3) * $this.PIf * 0.9;
    }
    $this.dv_1 = 3300.0;
  }
  function CartoonPlanesScene() {
    Scene.call(this);
    this.wt_1 = new TimersMap();
    this.xt_1 = 0.25;
    this.yt_1 = 80.0;
    this.zt_1 = 100.0;
    this.au_1 = 10.0;
    this.bu_1 = 500.0;
    this.cu_1 = 1.7;
    this.su_1 = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.au_1, this.au_1, this.au_1));
    this.tu_1 = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.au_1, this.au_1, this.au_1));
    this.uu_1 = mutableListOf([get_HINT_VRS_NONE()]);
    this.PIf = 3.1415927;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.vu_1 = new Float32Array([0.5]);
    this.wu_1 = new Vec3();
    this.xu_1 = 0.0;
    this.yu_1 = new Vec3(0.0, 0.0, 0.0);
    this.zu_1 = 0.0;
    this.av_1 = 0.0;
    this.bv_1 = 0.0;
    this.cv_1 = 0.0;
    this.dv_1 = 3000.0;
    this.ev_1 = new Vec3();
    this.texSky = Textures_getInstance_1().jv_1;
    this.texSky1 = Textures_getInstance_1().hv_1;
    this.texSky2 = Textures_getInstance_1().iv_1;
    this.meshPlane1 = Meshes_getInstance_1().mt_1;
    this.meshPlane2 = Meshes_getInstance_1().nt_1;
    this.texPlane1 = Textures_getInstance_1().kv_1;
    this.texPlane2 = Textures_getInstance_1().lv_1;
    this.meshes = Meshes_getInstance_1().ot_1;
    this.textures = Textures_getInstance_1().nv_1;
    this.shaders = Shaders_getInstance_1().sv_1;
    Companion_instance_1.tv(this.wt_1);
    this.Z_NEAR = 30.0;
    this.Z_FAR = 30000.0;
    this.FOV_LANDSCAPE = 75.0;
    this.FOV_PORTRAIT = 120.0;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new CartoonPlanesSettings();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.CartoonPlanesScene.<anonymous>' call
    this_0.cameraPeriod = 1.0;
    this_0.vignette = true;
    this_0.blurred = false;
    this_0.autoSwitchCameras = true;
    this_0.lowQuality = false;
    this_0.clock = false;
    tmp_0.settings = this_0;
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new ClearColorCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.CartoonPlanesScene.<anonymous>' call
    this_1.color = new Vec4(0.0, 0.7843137254901961, 0.0, 1.0);
    this_1.name = 'clear color';
    this_1.enabled = true;
    tmp_1.hu_1 = this_1;
    var txSceneObjects = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(1.0, 1.0, 1.0));
    var stateSky = new DrawMeshState(Shaders_getInstance_1().pv_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 6)]), 12));
    this.ku_1 = new DrawTransformedMeshCommand(Meshes_getInstance_1().kt_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_1().hv_1), new UniformTextureValue(Textures_getInstance_1().iv_1), new UniformTextureValue(Textures_getInstance_1().gv_1), UniformFloatValueWithArray(this.vu_1)]), stateSky, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(350.0, 350.0, 350.0)));
    var stateSkyStatic = new DrawMeshState(Shaders_getInstance_1().ov_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 6)]), 12));
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_2 = new DrawTransformedMeshCommand(Meshes_getInstance_1().kt_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(this.texSky)]), stateSkyStatic, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(350.0, 350.0, 350.0)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.CartoonPlanesScene.<anonymous>' call
    this_2.hints = this.uu_1;
    tmp_2.lu_1 = this_2;
    var statePlaneDiffuse = new DrawMeshState(Shaders_getInstance_1().ov_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 6)]), 16));
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    var this_3 = new DrawTransformedMeshCommand(Meshes_getInstance_1().mt_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_1().kv_1)]), statePlaneDiffuse, this.su_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.CartoonPlanesScene.<anonymous>' call
    this_3.hints = this.uu_1;
    tmp_3.mu_1 = this_3;
    var tmp_4 = this;
    // Inline function 'kotlin.apply' call
    var this_4 = new DrawTransformedMeshCommand(Meshes_getInstance_1().nt_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_1().lv_1)]), statePlaneDiffuse, this.tu_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.CartoonPlanesScene.<anonymous>' call
    this_4.hints = this.uu_1;
    tmp_4.ou_1 = this_4;
    var statePlaneOutline = new DrawMeshState(Shaders_getInstance_1().qv_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_FRONT_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_NORMAL_getInstance(), 1, VertexFormat_HALF3_getInstance(), 10)]), 16));
    var tmp_5 = this;
    var tmp_6 = Meshes_getInstance_1().mt_1;
    var tmp_7 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([this.cu_1]);
    var tmp_8 = UniformFloatValueWithArray(tmp$ret$6);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.0, 0.0, 0.0, 1.0]);
    tmp_5.nu_1 = new DrawTransformedMeshCommand(tmp_6, listOf([tmp_7, tmp_8, UniformFloatValueWithArray(tmp$ret$7)]), statePlaneOutline, this.su_1);
    var tmp_9 = this;
    var tmp_10 = Meshes_getInstance_1().nt_1;
    var tmp_11 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([this.cu_1]);
    var tmp_12 = UniformFloatValueWithArray(tmp$ret$8);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.0, 0.0, 0.0, 1.0]);
    tmp_9.pu_1 = new DrawTransformedMeshCommand(tmp_10, listOf([tmp_11, tmp_12, UniformFloatValueWithArray(tmp$ret$9)]), statePlaneOutline, this.tu_1);
    var tmp_13 = Shaders_getInstance_1().rv_1;
    // Inline function 'kotlin.apply' call
    var this_5 = new Blending();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.CartoonPlanesScene.<anonymous>' call
    this_5.enabled = true;
    this_5.equationColor = BlendingEquation_ADD_getInstance();
    this_5.sourceFactorColor = BlendingFactor_SRC_ALPHA_getInstance();
    this_5.destinationFactorColor = BlendingFactor_ONE_getInstance();
    var stateProp = new DrawMeshState(tmp_13, this_5, get_DEPTH_NO_WRITE(), CullFace_DISABLED_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 6)]), 12));
    var tmp_14 = this;
    var tmp_15 = Meshes_getInstance_1().lt_1;
    var tmp_16 = UniformFloatValueWithArray(new Float32Array(16));
    var tmp_17 = new UniformTextureValue(Textures_getInstance_1().mv_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$11 = new Float32Array([1.5]);
    var tmp_18 = new DrawTransformedMeshCommand(tmp_15, listOf([tmp_16, tmp_17, UniformFloatValueWithArray(tmp$ret$11)]), stateProp, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.bu_1 * 3.0, this.bu_1 * 3.0, this.bu_1 * 3.0)));
    var tmp_19 = Meshes_getInstance_1().lt_1;
    var tmp_20 = UniformFloatValueWithArray(new Float32Array(16));
    var tmp_21 = new UniformTextureValue(Textures_getInstance_1().mv_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$12 = new Float32Array([1.5]);
    var tmp_22 = new DrawTransformedMeshCommand(tmp_19, listOf([tmp_20, tmp_21, UniformFloatValueWithArray(tmp$ret$12)]), stateProp, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.bu_1 * 3.0, this.bu_1 * 3.0, this.bu_1 * 3.0)));
    var tmp_23 = Meshes_getInstance_1().lt_1;
    var tmp_24 = UniformFloatValueWithArray(new Float32Array(16));
    var tmp_25 = new UniformTextureValue(Textures_getInstance_1().mv_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$13 = new Float32Array([1.5]);
    tmp_14.qu_1 = GroupCommandArr(true, [tmp_18, tmp_22, new DrawTransformedMeshCommand(tmp_23, listOf([tmp_24, tmp_25, UniformFloatValueWithArray(tmp$ret$13)]), stateProp, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.bu_1 * 3.0, this.bu_1 * 3.0, this.bu_1 * 3.0)))]);
    var tmp_26 = this;
    var tmp_27 = Meshes_getInstance_1().lt_1;
    var tmp_28 = UniformFloatValueWithArray(new Float32Array(16));
    var tmp_29 = new UniformTextureValue(Textures_getInstance_1().mv_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$14 = new Float32Array([1.5]);
    var tmp_30 = new DrawTransformedMeshCommand(tmp_27, listOf([tmp_28, tmp_29, UniformFloatValueWithArray(tmp$ret$14)]), stateProp, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.bu_1 * 3.0, this.bu_1 * 3.0, this.bu_1 * 3.0)));
    var tmp_31 = Meshes_getInstance_1().lt_1;
    var tmp_32 = UniformFloatValueWithArray(new Float32Array(16));
    var tmp_33 = new UniformTextureValue(Textures_getInstance_1().mv_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$15 = new Float32Array([1.5]);
    var tmp_34 = new DrawTransformedMeshCommand(tmp_31, listOf([tmp_32, tmp_33, UniformFloatValueWithArray(tmp$ret$15)]), stateProp, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.bu_1 * 3.0, this.bu_1 * 3.0, this.bu_1 * 3.0)));
    var tmp_35 = Meshes_getInstance_1().lt_1;
    var tmp_36 = UniformFloatValueWithArray(new Float32Array(16));
    var tmp_37 = new UniformTextureValue(Textures_getInstance_1().mv_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$16 = new Float32Array([1.5]);
    tmp_26.ru_1 = GroupCommandArr(true, [tmp_30, tmp_34, new DrawTransformedMeshCommand(tmp_35, listOf([tmp_36, tmp_37, UniformFloatValueWithArray(tmp$ret$16)]), stateProp, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.bu_1 * 3.0, this.bu_1 * 3.0, this.bu_1 * 3.0)))]);
    var tmp_38 = this;
    // Inline function 'kotlin.apply' call
    var this_6 = new ClearCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.CartoonPlanesScene.<anonymous>' call
    this_6.clearType = ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
    tmp_38.gu_1 = GroupCommandArr(true, [this.hu_1, this_6]);
    var tmp_39 = this;
    // Inline function 'kotlin.apply' call
    var this_7 = new VignetteCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.CartoonPlanesScene.<anonymous>' call
    this_7.color0 = new Vec4(0.7, 0.7, 0.7, 1.0);
    this_7.color1 = new Vec4(1.0, 1.0, 1.0, 1.0);
    tmp_39.iu_1 = this_7;
    this.du_1 = GroupCommandArr(true, [MainPassCommandArr(true, [this.gu_1, this.mu_1, this.nu_1, this.ou_1, this.pu_1, this.lu_1, this.ku_1, this.qu_1, this.ru_1, this.iu_1])]);
    var tmp_40 = this;
    // Inline function 'kotlin.apply' call
    var this_8 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.CartoonPlanesScene.<anonymous>' call
    this_8.name = 'blurred-main';
    this_8.enabled = true;
    this_8.minSize = 180;
    this_8.brightness = 0.95;
    this_8.blurSize = BlurSize_KERNEL_4_getInstance();
    this_8.commands = mutableListOf([this.gu_1, this.mu_1, this.nu_1, this.ou_1, this.pu_1, this.lu_1, this.ku_1, this.qu_1, this.ru_1, this.iu_1]);
    tmp_40.fu_1 = this_8;
    var tmp_41 = this;
    // Inline function 'kotlin.apply' call
    var this_9 = new DrawBlurredCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.CartoonPlanesScene.<anonymous>' call
    this_9.name = 'draw blurred';
    this_9.blending = get_BLENDING_NONE();
    tmp_41.ju_1 = this_9;
    this.eu_1 = GroupCommandArr(false, [this.fu_1, MainPassCommandArr(true, [this.gu_1, this.ju_1])]);
    this.commands = mutableListOf([this.du_1, this.eu_1]);
  }
  protoOf(CartoonPlanesScene).in = function () {
    return this.settings;
  };
  protoOf(CartoonPlanesScene).yn = function () {
    return this.PIf;
  };
  protoOf(CartoonPlanesScene).uv = function (_set____db54di) {
    this.texSky = _set____db54di;
  };
  protoOf(CartoonPlanesScene).vv = function () {
    return this.texSky;
  };
  protoOf(CartoonPlanesScene).wv = function (_set____db54di) {
    this.texSky1 = _set____db54di;
  };
  protoOf(CartoonPlanesScene).xv = function () {
    return this.texSky1;
  };
  protoOf(CartoonPlanesScene).yv = function (_set____db54di) {
    this.texSky2 = _set____db54di;
  };
  protoOf(CartoonPlanesScene).zv = function () {
    return this.texSky2;
  };
  protoOf(CartoonPlanesScene).aw = function (_set____db54di) {
    this.meshPlane1 = _set____db54di;
  };
  protoOf(CartoonPlanesScene).bw = function () {
    return this.meshPlane1;
  };
  protoOf(CartoonPlanesScene).cw = function (_set____db54di) {
    this.meshPlane2 = _set____db54di;
  };
  protoOf(CartoonPlanesScene).dw = function () {
    return this.meshPlane2;
  };
  protoOf(CartoonPlanesScene).ew = function (_set____db54di) {
    this.texPlane1 = _set____db54di;
  };
  protoOf(CartoonPlanesScene).fw = function () {
    return this.texPlane1;
  };
  protoOf(CartoonPlanesScene).gw = function (_set____db54di) {
    this.texPlane2 = _set____db54di;
  };
  protoOf(CartoonPlanesScene).hw = function () {
    return this.texPlane2;
  };
  protoOf(CartoonPlanesScene).updateTimers = function (time) {
    this.wt_1.qi(time);
    animate_0(this);
    protoOf(Scene).updateTimers.call(this, time);
  };
  protoOf(CartoonPlanesScene).updateViewportSize = function (width, height) {
    protoOf(Scene).updateViewportSize.call(this, width, height);
  };
  protoOf(CartoonPlanesScene).initialize = function () {
    randomizeCamera_0(this);
  };
  protoOf(CartoonPlanesScene).changeSky = function () {
    this.wt_1.oi(Timers_SwapSky_getInstance(), 0.0);
  };
  protoOf(CartoonPlanesScene).preventChangeSky = function () {
    this.wt_1.oi(Timers_SwapSky_getInstance(), 1.0);
  };
  protoOf(CartoonPlanesScene).randomizePropTexture = function () {
    var id = Default_getInstance().u5(2, 6);
    Textures_getInstance_1().mv_1.fileName = 'prop/' + id;
  };
  protoOf(CartoonPlanesScene).setPropTexture = function (id) {
    Textures_getInstance_1().mv_1.fileName = 'prop/' + id;
  };
  protoOf(CartoonPlanesScene).canChangePlanes = function () {
    return this.wt_1.ni(Timers_SwapPlanes_getInstance()) === 1.0;
  };
  protoOf(CartoonPlanesScene).canChangeSky = function () {
    return this.wt_1.ni(Timers_SwapSky_getInstance()) === 1.0;
  };
  protoOf(CartoonPlanesScene).changePlanes = function (plane1, plane2) {
    this.settings.currentPlane = plane1;
    this.settings.nextPlane = plane2;
    Meshes_getInstance_1().mt_1.fileName = 'plane' + plane1;
    Meshes_getInstance_1().nt_1.fileName = 'plane' + plane2;
    Textures_getInstance_1().kv_1.fileName = 'plane' + plane1;
    Textures_getInstance_1().lv_1.fileName = 'plane' + plane2;
    if (!(plane1 === plane2)) {
      this.wt_1.oi(Timers_SwapPlanes_getInstance(), 0.0);
    } else {
      if (Default_getInstance().v5() > 0.75) {
        this.wt_1.oi(Timers_SwapPlanes_getInstance(), 0.0);
      } else {
        this.wt_1.oi(Timers_SwapPlanes_getInstance(), 1.0);
      }
    }
    animate_0(this);
  };
  var TimeOfDay_Day_instance_1;
  var TimeOfDay_Night_instance_1;
  var TimeOfDay_Sunrise_instance_1;
  function values_2() {
    return [TimeOfDay_Day_getInstance_1(), TimeOfDay_Night_getInstance_1(), TimeOfDay_Sunrise_getInstance_1()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Day':
        return TimeOfDay_Day_getInstance_1();
      case 'Night':
        return TimeOfDay_Night_getInstance_1();
      case 'Sunrise':
        return TimeOfDay_Sunrise_getInstance_1();
      default:
        TimeOfDay_initEntries_1();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var TimeOfDay_entriesInitialized_1;
  function TimeOfDay_initEntries_1() {
    if (TimeOfDay_entriesInitialized_1)
      return Unit_instance;
    TimeOfDay_entriesInitialized_1 = true;
    TimeOfDay_Day_instance_1 = new TimeOfDay_1('Day', 0, 0);
    TimeOfDay_Night_instance_1 = new TimeOfDay_1('Night', 1, 1);
    TimeOfDay_Sunrise_instance_1 = new TimeOfDay_1('Sunrise', 2, 2);
  }
  function TimeOfDay_1(name, ordinal, value) {
    Enum.call(this, name, ordinal);
  }
  function CartoonPlanesSettings() {
    this.cameraPeriod = 1.0;
    this.vignette = true;
    this.blurred = false;
    this.autoSwitchCameras = true;
    this.lowQuality = false;
    this.clock = false;
    this.currentPlane = 0;
    this.nextPlane = 1;
    this.timeOfDay = TimeOfDay_Day_getInstance_1();
  }
  protoOf(CartoonPlanesSettings).bo = function (_set____db54di) {
    this.cameraPeriod = _set____db54di;
  };
  protoOf(CartoonPlanesSettings).co = function () {
    return this.cameraPeriod;
  };
  protoOf(CartoonPlanesSettings).do = function (_set____db54di) {
    this.vignette = _set____db54di;
  };
  protoOf(CartoonPlanesSettings).eo = function () {
    return this.vignette;
  };
  protoOf(CartoonPlanesSettings).fo = function (_set____db54di) {
    this.blurred = _set____db54di;
  };
  protoOf(CartoonPlanesSettings).go = function () {
    return this.blurred;
  };
  protoOf(CartoonPlanesSettings).ho = function (_set____db54di) {
    this.autoSwitchCameras = _set____db54di;
  };
  protoOf(CartoonPlanesSettings).io = function () {
    return this.autoSwitchCameras;
  };
  protoOf(CartoonPlanesSettings).no = function (_set____db54di) {
    this.lowQuality = _set____db54di;
  };
  protoOf(CartoonPlanesSettings).oo = function () {
    return this.lowQuality;
  };
  protoOf(CartoonPlanesSettings).lo = function (_set____db54di) {
    this.clock = _set____db54di;
  };
  protoOf(CartoonPlanesSettings).mo = function () {
    return this.clock;
  };
  protoOf(CartoonPlanesSettings).kw = function (_set____db54di) {
    this.currentPlane = _set____db54di;
  };
  protoOf(CartoonPlanesSettings).lw = function () {
    return this.currentPlane;
  };
  protoOf(CartoonPlanesSettings).mw = function (_set____db54di) {
    this.nextPlane = _set____db54di;
  };
  protoOf(CartoonPlanesSettings).nw = function () {
    return this.nextPlane;
  };
  protoOf(CartoonPlanesSettings).ow = function (_set____db54di) {
    this.timeOfDay = _set____db54di;
  };
  protoOf(CartoonPlanesSettings).ko = function () {
    return this.timeOfDay;
  };
  function TimeOfDay_Day_getInstance_1() {
    TimeOfDay_initEntries_1();
    return TimeOfDay_Day_instance_1;
  }
  function TimeOfDay_Night_getInstance_1() {
    TimeOfDay_initEntries_1();
    return TimeOfDay_Night_instance_1;
  }
  function TimeOfDay_Sunrise_getInstance_1() {
    TimeOfDay_initEntries_1();
    return TimeOfDay_Sunrise_instance_1;
  }
  function Shaders_1() {
    Shaders_instance_1 = this;
    this.ov_1 = new Shader('Diffuse');
    this.pv_1 = new Shader('SkyTransition');
    this.qv_1 = new Shader('Outline');
    this.rv_1 = new Shader('Prop');
    this.sv_1 = mutableListOf([this.ov_1, this.pv_1, this.qv_1, this.rv_1]);
  }
  var Shaders_instance_1;
  function Shaders_getInstance_1() {
    if (Shaders_instance_1 == null)
      new Shaders_1();
    return Shaders_instance_1;
  }
  function Textures_1() {
    Textures_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.Textures.texNoise.<anonymous>' call
    this_0.name = 'noise';
    this_0.fileName = 'noise';
    this_0.format = TextureFormat_ASTC_getInstance();
    this_0.minFilter = TextureFiltering_LINEAR_getInstance();
    this_0.magFilter = TextureFiltering_LINEAR_getInstance();
    this_0.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp.gv_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.Textures.texSky1.<anonymous>' call
    this_1.name = 'sky-1';
    this_1.fileName = 'sky/day/1';
    this_1.format = TextureFormat_ASTC_getInstance();
    this_1.minFilter = TextureFiltering_LINEAR_getInstance();
    this_1.magFilter = TextureFiltering_LINEAR_getInstance();
    this_1.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp_0.hv_1 = this_1;
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var this_2 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.Textures.texSky2.<anonymous>' call
    this_2.name = 'sky-2';
    this_2.fileName = 'sky/night/1';
    this_2.format = TextureFormat_ASTC_getInstance();
    this_2.minFilter = TextureFiltering_LINEAR_getInstance();
    this_2.magFilter = TextureFiltering_LINEAR_getInstance();
    this_2.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp_1.iv_1 = this_2;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_3 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.Textures.texSky.<anonymous>' call
    this_3.name = 'sky';
    this_3.fileName = 'sky/night/1';
    this_3.format = TextureFormat_ASTC_getInstance();
    this_3.minFilter = TextureFiltering_LINEAR_getInstance();
    this_3.magFilter = TextureFiltering_LINEAR_getInstance();
    this_3.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp_2.jv_1 = this_3;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    var this_4 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.Textures.texPlane1.<anonymous>' call
    this_4.name = 'plane-1';
    this_4.fileName = 'plane0';
    this_4.format = TextureFormat_ASTC_getInstance();
    this_4.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_4.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_4.wrapping = TextureWrapping_REPEAT_getInstance();
    this_4.mipmaps = 10;
    tmp_3.kv_1 = this_4;
    var tmp_4 = this;
    // Inline function 'kotlin.apply' call
    var this_5 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.Textures.texPlane2.<anonymous>' call
    this_5.name = 'plane-2';
    this_5.fileName = 'plane1';
    this_5.format = TextureFormat_ASTC_getInstance();
    this_5.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_5.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_5.wrapping = TextureWrapping_REPEAT_getInstance();
    this_5.mipmaps = 10;
    tmp_4.lv_1 = this_5;
    var tmp_5 = this;
    // Inline function 'kotlin.apply' call
    var this_6 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.cartoonplanes.Textures.texProp.<anonymous>' call
    this_6.name = 'prop';
    this_6.fileName = 'prop/2';
    this_6.format = TextureFormat_ASTC_getInstance();
    this_6.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    this_6.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_6.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_6.mipmaps = 8;
    tmp_5.mv_1 = this_6;
    this.nv_1 = mutableListOf([this.gv_1, this.jv_1, this.hv_1, this.iv_1, this.kv_1, this.lv_1, this.mv_1]);
  }
  var Textures_instance_1;
  function Textures_getInstance_1() {
    if (Textures_instance_1 == null)
      new Textures_1();
    return Textures_instance_1;
  }
  var Timers_PropRotate_instance;
  var Timers_PropFlicker_instance;
  var Timers_PlaneWonder1_instance;
  var Timers_PlaneWonder2_instance;
  var Timers_PlaneBanking_instance;
  var Timers_Camera_instance_1;
  var Timers_SwapPlanes_instance;
  var Timers_SwapSky_instance;
  function Companion_1() {
    this.fv_1 = 27800.0;
  }
  protoOf(Companion_1).tv = function (timers) {
    timers.li(Timers_PropRotate_getInstance(), 741000.0);
    timers.li(Timers_PropFlicker_getInstance(), 10.0);
    timers.li(Timers_PlaneWonder1_getInstance(), 25000.0);
    timers.li(Timers_PlaneWonder2_getInstance(), 6000.0);
    timers.li(Timers_PlaneBanking_getInstance(), 22800.0);
    timers.mi(Timers_Camera_getInstance_0(), this.fv_1, false);
    timers.mi(Timers_SwapPlanes_getInstance(), 4000.0, false);
    timers.mi(Timers_SwapSky_getInstance(), 3000.0, false);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  var Timers_entriesInitialized_1;
  function Timers_initEntries_1() {
    if (Timers_entriesInitialized_1)
      return Unit_instance;
    Timers_entriesInitialized_1 = true;
    Timers_PropRotate_instance = new Timers_1('PropRotate', 0);
    Timers_PropFlicker_instance = new Timers_1('PropFlicker', 1);
    Timers_PlaneWonder1_instance = new Timers_1('PlaneWonder1', 2);
    Timers_PlaneWonder2_instance = new Timers_1('PlaneWonder2', 3);
    Timers_PlaneBanking_instance = new Timers_1('PlaneBanking', 4);
    Timers_Camera_instance_1 = new Timers_1('Camera', 5);
    Timers_SwapPlanes_instance = new Timers_1('SwapPlanes', 6);
    Timers_SwapSky_instance = new Timers_1('SwapSky', 7);
  }
  function Timers_1(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Timers_PropRotate_getInstance() {
    Timers_initEntries_1();
    return Timers_PropRotate_instance;
  }
  function Timers_PropFlicker_getInstance() {
    Timers_initEntries_1();
    return Timers_PropFlicker_instance;
  }
  function Timers_PlaneWonder1_getInstance() {
    Timers_initEntries_1();
    return Timers_PlaneWonder1_instance;
  }
  function Timers_PlaneWonder2_getInstance() {
    Timers_initEntries_1();
    return Timers_PlaneWonder2_instance;
  }
  function Timers_PlaneBanking_getInstance() {
    Timers_initEntries_1();
    return Timers_PlaneBanking_instance;
  }
  function Timers_Camera_getInstance_0() {
    Timers_initEntries_1();
    return Timers_Camera_instance_1;
  }
  function Timers_SwapPlanes_getInstance() {
    Timers_initEntries_1();
    return Timers_SwapPlanes_instance;
  }
  function Timers_SwapSky_getInstance() {
    Timers_initEntries_1();
    return Timers_SwapSky_instance;
  }
  function Cameras_2() {
    Cameras_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pw_1 = [InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(4.84, -644.785, -25.362), new Vec3(4.673, -1.741, 4.447)), new CameraPosition(new Vec3(2.56, -126.0, -8.595), new Vec3(2.533, -1.741, 3.993)), 1.0, '', false), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(-137.0, -115.0, -12.0), new Vec3(3.485, -0.679, -16.321)), new CameraPosition(new Vec3(138.0, -110.0, 20.0), new Vec3(3.485, -0.679, -16.321)), 1.0, '', true), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(208.0, -208.0, -21.0), new Vec3(0.0, 0.0, 0.0)), new CameraPosition(new Vec3(265.0, 77.0, 22.0), new Vec3(0.0, 0.0, -35.0)), 1.0, '', true), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(347.0, 73.0, 15.0), new Vec3(161.0, -220.0, -19.0)), new CameraPosition(new Vec3(69.0, 365.0, 15.0), new Vec3(-100.0, 162.0, -18.0)), 1.0, '', true), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(147.0, 212.0, 0.0), new Vec3(20.0, -10.0, 7.0)), new CameraPosition(new Vec3(-146.0, 182.0, 30.0), new Vec3(-20.0, 4.0, -35.0)), 1.0, '', true), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(-244.0, 139.0, 77.0), new Vec3(-3.0, -27.0, -37.0)), new CameraPosition(new Vec3(-151.0, -357.0, 11.0), new Vec3(20.0, -45.0, 0.0)), 1.0, '', true), InteractiveCameraPositionPair_init_$Create$(new CameraPosition(new Vec3(-265.0, -158.0, -20.0), new Vec3(0.0, 0.0, 32.0)), new CameraPosition(new Vec3(-95.0, -70.0, 0.0), new Vec3(9.0, -13.0, -10.0)), 1.0, '', false)];
  }
  var Cameras_instance_2;
  function Cameras_getInstance_2() {
    if (Cameras_instance_2 == null)
      new Cameras_2();
    return Cameras_instance_2;
  }
  function InteractiveCameraPositionPair_init_$Init$(start, end, speedMultiplier, name, interactive, $this) {
    CameraPositionPair.call($this, start, end, speedMultiplier);
    InteractiveCameraPositionPair.call($this);
    $this.tw_1 = name;
    $this.uw_1 = interactive;
    return $this;
  }
  function InteractiveCameraPositionPair_init_$Create$(start, end, speedMultiplier, name, interactive) {
    return InteractiveCameraPositionPair_init_$Init$(start, end, speedMultiplier, name, interactive, objectCreate(protoOf(InteractiveCameraPositionPair)));
  }
  function InteractiveCameraPositionPair() {
    this.tw_1 = '';
    this.uw_1 = false;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.vw_1 = new Vec4(0.55859375, 0.7578125, 0.87890625, 1.0);
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new ClearColorCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.Companion.clearColorCommand.<anonymous>' call
    this_0.color = Companion_getInstance_2().vw_1;
    this_0.name = 'clear color';
    this_0.enabled = true;
    tmp.ww_1 = this_0;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ExampleScene() {
    Companion_getInstance_2();
    Scene.call(this);
    this.timers = new TimersMap();
    this.cx_1 = 6.2831855;
    this.dx_1 = 1000000.0;
    this.ex_1 = 11000.0;
    this.fx_1 = 1100.0;
    this.FOV_TRANSITION = 20.0;
    this.arr1 = new Float32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(16), null);
    while (tmp_0 < 16) {
      tmp_1[tmp_0] = 0.0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.arr2 = tmp_1;
    var tmp_2 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_2.arr3 = new Float32Array([0.0, 0.0, 0.0]);
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_3.arr4 = [1.0, 1.0, 1.0];
    this.map8 = mapOf([to(1, 'x'), to(2, 'y'), to(-1, 'zz')]);
    var tmp_4 = this;
    var tmp_5 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([0.55078125, 0.703125, 0.77734375, 1.0]);
    tmp_4.uniformsMountainsBright = listOf([tmp_5, UniformFloatValueWithArray(tmp$ret$6)]);
    var tmp_6 = this;
    var tmp_7 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.42578125, 0.62890625, 0.73828125, 1.0]);
    tmp_6.uniformsMountainsDark = listOf([tmp_7, UniformFloatValueWithArray(tmp$ret$7)]);
    var tmp_8 = this;
    var tmp_9 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.37890625, 0.375, 0.33984375, 1.0]);
    tmp_8.uniformsCenterRockBright = listOf([tmp_9, UniformFloatValueWithArray(tmp$ret$8)]);
    var tmp_10 = this;
    var tmp_11 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.26953125, 0.265625, 0.23828125, 1.0]);
    tmp_10.uniformsCenterRockDark = listOf([tmp_11, UniformFloatValueWithArray(tmp$ret$9)]);
    var tmp_12 = this;
    var tmp_13 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.08984375, 0.26953125, 0.23828125, 1.0]);
    tmp_12.uniformsHills = listOf([tmp_13, UniformFloatValueWithArray(tmp$ret$10)]);
    var tmp_14 = this;
    var tmp_15 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$11 = new Float32Array([0.15625, 0.359375, 0.25390625, 1.0]);
    tmp_14.uniformsGround1 = listOf([tmp_15, UniformFloatValueWithArray(tmp$ret$11)]);
    var tmp_16 = this;
    var tmp_17 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$12 = new Float32Array([0.33203125, 0.578125, 0.62890625, 1.0]);
    tmp_16.uniformsGround2 = listOf([tmp_17, UniformFloatValueWithArray(tmp$ret$12)]);
    var tmp_18 = this;
    var tmp_19 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$13 = new Float32Array([0.55859375, 0.7578125, 0.81640625, 1.0]);
    tmp_18.uniformsWater = listOf([tmp_19, UniformFloatValueWithArray(tmp$ret$13)]);
    var tmp_20 = this;
    var tmp_21 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$14 = new Float32Array([0.74609375, 0.85546875, 0.921875, 1.0]);
    tmp_20.uniformsWaterHighlights = listOf([tmp_21, UniformFloatValueWithArray(tmp$ret$14), UniformFloatValueWithArray(new Float32Array(1))]);
    var tmp_22 = this;
    var tmp_23 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$15 = new Float32Array([0.99609375, 0.99609375, 0.86328125, 1.0]);
    tmp_22.uniformsSkyObjects = listOf([tmp_23, UniformFloatValueWithArray(tmp$ret$15)]);
    var tmp_24 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.texStatic.<anonymous>' call
    this_0.name = 'static';
    this_0.fileName = 'static';
    this_0.format = TextureFormat_ASTC_getInstance();
    this_0.mipmaps = 9;
    tmp_24.texStatic = this_0;
    this.uniformsDiffuseTest = listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(this.texStatic)]);
    var tmp_25 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.texFp16.<anonymous>' call
    this_1.name = 'testfp16';
    this_1.fileName = 'Alpaca/Eating/animal.rgba.fp16';
    this_1.format = TextureFormat_RGBA16F_getInstance();
    this_1.minFilter = TextureFiltering_NEAREST_getInstance();
    this_1.magFilter = TextureFiltering_NEAREST_getInstance();
    this_1.width = 362;
    this_1.height = 19;
    tmp_25.texFp16 = this_1;
    this.uniformsAnimated = listOf([UniformFloatValueWithArray(new Float32Array(16)), UniformFloatValueWithArray(new Float32Array(4)), UniformIntValueWithArray(new Int32Array(1)), UniformFloatValueWithArray(new Float32Array(1)), new UniformTextureValue(this.texFp16), UniformFloatValueWithArray(new Float32Array(4))]);
    this.animationAnimal = new TextureAnimationChunked(362, 362, 18);
    this.gx_1 = 25000.0;
    this.hx_1 = 34000.0;
    this.ix_1 = 250000.0;
    this.jx_1 = 300000.0;
    this.kx_1 = 2500.0;
    this.lx_1 = 1000.0;
    this.mx_1 = 900.0;
    this.nx_1 = 6000.0;
    this.ox_1 = 1000.0;
    this.Z_NEAR = 50.0;
    this.Z_FAR = 10000.0;
    this.FOV_LANDSCAPE = 35.0;
    this.FOV_PORTRAIT = 60.0;
    this.timers.li(Timers_Clouds1_getInstance(), this.ix_1);
    this.timers.li(Timers_Clouds2_getInstance(), this.jx_1);
    this.timers.li(Timers_Water_getInstance_1(), this.kx_1);
    this.timers.li(Timers_BirdWings1_getInstance_0(), this.lx_1);
    this.timers.li(Timers_BirdWings2_getInstance_0(), this.mx_1);
    this.timers.li(Timers_AnimalAnimation_getInstance(), this.nx_1);
    this.timers.li(Timers_ShootingStar_getInstance(), this.ox_1);
    this.timers.li(Timers_BirdsFly_getInstance_0(), this.gx_1);
    this.timers.li(Timers_Camera_getInstance_1(), this.hx_1);
    this.cameraAnimator = new CameraPathAnimator(this.dx_1, this.ex_1, this.fx_1, true);
    this.cameraAnimator.setCameras(Cameras_getInstance_2().pw_1);
    this.cameraAnimator.minDurationCoefficient = 2.0;
    // Inline function 'kotlin.apply' call
    var this_2 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_2.fileName = 'static';
    var meshTestDiffuse = this_2;
    // Inline function 'kotlin.apply' call
    var this_3 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_3.fileName = 'Alpaca-Idle';
    var meshAnimal = this_3;
    // Inline function 'kotlin.apply' call
    var this_4 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_4.fileName = 'sun';
    var meshSun = this_4;
    // Inline function 'kotlin.apply' call
    var this_5 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_5.fileName = 'sun_small';
    var meshSunSmall = this_5;
    // Inline function 'kotlin.apply' call
    var this_6 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_6.fileName = 'stars';
    var meshStars = this_6;
    // Inline function 'kotlin.apply' call
    var this_7 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_7.fileName = 'mountains_bright';
    var tmp_26 = this_7;
    // Inline function 'kotlin.apply' call
    var this_8 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_8.fileName = 'mountains_dark';
    var tmp_27 = this_8;
    // Inline function 'kotlin.apply' call
    var this_9 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_9.fileName = 'center_rock_bright';
    var tmp_28 = this_9;
    // Inline function 'kotlin.apply' call
    var this_10 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_10.fileName = 'center_rock_dark';
    var tmp_29 = this_10;
    // Inline function 'kotlin.apply' call
    var this_11 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_11.fileName = 'ground_1';
    var tmp_30 = this_11;
    // Inline function 'kotlin.apply' call
    var this_12 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_12.fileName = 'ground_2';
    var tmp_31 = this_12;
    // Inline function 'kotlin.apply' call
    var this_13 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_13.fileName = 'hills';
    var tmp_32 = this_13;
    // Inline function 'kotlin.apply' call
    var this_14 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_14.fileName = 'water';
    var tmp_33 = this_14;
    // Inline function 'kotlin.apply' call
    var this_15 = MeshConstructor1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_15.fileName = 'water_highlights';
    this.meshes = mutableListOf([tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, this_15, meshTestDiffuse, meshAnimal, meshSun, meshSunSmall, meshStars]);
    this.textures = mutableListOf([this.texStatic, this.texFp16]);
    // Inline function 'kotlin.apply' call
    var this_16 = new Shader();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_16.name = 'Color';
    var shaderColor = this_16;
    // Inline function 'kotlin.apply' call
    var this_17 = new Shader();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_17.name = 'Diffuse';
    var shaderDiffuse = this_17;
    // Inline function 'kotlin.apply' call
    var this_18 = new Shader();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_18.name = 'ColorAnimatedTextureChunked';
    var shaderAnimated = this_18;
    // Inline function 'kotlin.apply' call
    var this_19 = new Shader();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_19.name = 'Water';
    var shaderWater = this_19;
    this.shaders = mutableListOf([shaderColor, shaderDiffuse, shaderAnimated, shaderWater]);
    var stateColorFp16 = new DrawMeshState(shaderColor, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0)), 8));
    var stateColorFp16NoDepth = new DrawMeshState(shaderColor, get_BLENDING_NONE(), get_DEPTH_NO_WRITE(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0)), 8));
    var stateDiffuseTest = new DrawMeshState(shaderDiffuse, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_FLOAT3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_FLOAT2_getInstance(), 12)]), 20));
    var stateAnimated = new DrawMeshState(shaderAnimated, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), null);
    var stateWater = new DrawMeshState(shaderWater, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0)), 8));
    var txOrigin = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(1.0, 1.0, 1.0));
    var tmp_34 = new NoopCommand();
    // Inline function 'kotlin.apply' call
    var this_20 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    var tmp_35 = this_20;
    var tmp_36 = Companion_getInstance_2().ww_1;
    // Inline function 'kotlin.apply' call
    var this_21 = new ClearCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>.<anonymous>' call
    this_21.clearType = ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
    tmp_35.commands = mutableListOf([tmp_36, this_21]);
    var tmp_37 = this_20;
    var tmp_38 = new DrawMeshCommand(meshAnimal, this.uniformsAnimated, stateAnimated);
    // Inline function 'kotlin.apply' call
    var this_22 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_22.name = 'hill';
    this_22.commands = mutableListOf([new DrawTransformedMeshCommand(this.meshes.s(2), this.uniformsCenterRockBright, stateColorFp16, txOrigin), new DrawTransformedMeshCommand(this.meshes.s(3), this.uniformsCenterRockDark, stateColorFp16, txOrigin)]);
    var tmp_39 = this_22;
    // Inline function 'kotlin.apply' call
    var this_23 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_23.name = 'grounds';
    this_23.commands = mutableListOf([new DrawTransformedMeshCommand(this.meshes.s(4), this.uniformsGround1, stateColorFp16, txOrigin), new DrawTransformedMeshCommand(this.meshes.s(6), this.uniformsHills, stateColorFp16, txOrigin), new DrawTransformedMeshCommand(this.meshes.s(5), this.uniformsGround2, stateColorFp16, txOrigin)]);
    var tmp_40 = this_23;
    // Inline function 'kotlin.apply' call
    var this_24 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_24.name = 'mountains';
    this_24.commands = mutableListOf([new DrawTransformedMeshCommand(this.meshes.s(0), this.uniformsMountainsBright, stateColorFp16, txOrigin), new DrawTransformedMeshCommand(this.meshes.s(1), this.uniformsMountainsDark, stateColorFp16, txOrigin)]);
    var tmp_41 = this_24;
    // Inline function 'kotlin.apply' call
    var this_25 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_25.name = 'water';
    this_25.commands = mutableListOf([new DrawTransformedMeshCommand(this.meshes.s(7), this.uniformsWater, stateColorFp16NoDepth, txOrigin), new DrawTransformedMeshCommand(this.meshes.s(8), this.uniformsWaterHighlights, stateWater, txOrigin)]);
    var tmp_42 = this_25;
    // Inline function 'kotlin.apply' call
    var this_26 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_26.name = 'birds';
    var tmp_43 = this_26;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_43.commands = ArrayList_init_$Create$_0();
    var tmp_44 = this_26;
    // Inline function 'kotlin.apply' call
    var this_27 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_27.name = 'clouds';
    var tmp_45 = this_27;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_45.commands = ArrayList_init_$Create$_0();
    var tmp_46 = this_27;
    // Inline function 'kotlin.apply' call
    var this_28 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_28.name = 'sky objects';
    var tmp_47 = this_28;
    // Inline function 'kotlin.apply' call
    var this_29 = new DrawTransformedMeshCommand(meshSun, this.uniformsSkyObjects, stateColorFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>.<anonymous>' call
    this_29.enabled = false;
    var tmp_48 = this_29;
    var tmp_49 = new DrawTransformedMeshCommand(meshSunSmall, this.uniformsSkyObjects, stateColorFp16, txOrigin);
    // Inline function 'kotlin.apply' call
    var this_30 = new DrawTransformedMeshCommand(meshStars, this.uniformsSkyObjects, stateColorFp16, txOrigin);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>.<anonymous>' call
    this_30.enabled = false;
    tmp_47.commands = mutableListOf([tmp_48, tmp_49, this_30]);
    var tmp_50 = this_28;
    // Inline function 'kotlin.apply' call
    var this_31 = new GroupCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_31.name = 'shooting stars';
    var tmp_51 = this_31;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_51.commands = ArrayList_init_$Create$_0();
    var tmp_52 = this_31;
    var tmp_53 = new DrawMeshCommand(meshTestDiffuse, this.uniformsDiffuseTest, stateDiffuseTest);
    // Inline function 'kotlin.apply' call
    var this_32 = new VignetteCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.example.ExampleScene.<anonymous>' call
    this_32.color0 = new Vec4(0.5, 0.5, 0.5, 1.0);
    this_32.color1 = new Vec4(1.0, 1.0, 1.0, 1.0);
    this.commands = mutableListOf([tmp_34, tmp_37, tmp_38, tmp_39, tmp_40, tmp_41, tmp_42, tmp_44, tmp_46, tmp_50, tmp_52, tmp_53, this_32]);
  }
  protoOf(ExampleScene).fn = function () {
    return this.timers;
  };
  protoOf(ExampleScene).gn = function () {
    return this.cameraAnimator;
  };
  protoOf(ExampleScene).hn = function () {
    return this.FOV_TRANSITION;
  };
  protoOf(ExampleScene).px = function () {
    return this.arr1;
  };
  protoOf(ExampleScene).qx = function () {
    return this.arr2;
  };
  protoOf(ExampleScene).rx = function () {
    return this.arr3;
  };
  protoOf(ExampleScene).sx = function (_set____db54di) {
    this.arr4 = _set____db54di;
  };
  protoOf(ExampleScene).tx = function () {
    return this.arr4;
  };
  protoOf(ExampleScene).ux = function () {
    return this.map8;
  };
  protoOf(ExampleScene).vx = function () {
    return this.uniformsMountainsBright;
  };
  protoOf(ExampleScene).wx = function () {
    return this.uniformsMountainsDark;
  };
  protoOf(ExampleScene).xx = function () {
    return this.uniformsCenterRockBright;
  };
  protoOf(ExampleScene).yx = function () {
    return this.uniformsCenterRockDark;
  };
  protoOf(ExampleScene).zx = function () {
    return this.uniformsHills;
  };
  protoOf(ExampleScene).ay = function () {
    return this.uniformsGround1;
  };
  protoOf(ExampleScene).by = function () {
    return this.uniformsGround2;
  };
  protoOf(ExampleScene).cy = function () {
    return this.uniformsWater;
  };
  protoOf(ExampleScene).dy = function () {
    return this.uniformsWaterHighlights;
  };
  protoOf(ExampleScene).ey = function () {
    return this.uniformsSkyObjects;
  };
  protoOf(ExampleScene).fy = function () {
    return this.texStatic;
  };
  protoOf(ExampleScene).gy = function () {
    return this.uniformsDiffuseTest;
  };
  protoOf(ExampleScene).hy = function () {
    return this.texFp16;
  };
  protoOf(ExampleScene).iy = function () {
    return this.uniformsAnimated;
  };
  protoOf(ExampleScene).jy = function () {
    return this.animationAnimal;
  };
  protoOf(ExampleScene).updateTimers = function (time) {
    this.timers.qi(time);
    this.cameraAnimator.animate(time);
    this.animate();
    protoOf(Scene).updateTimers.call(this, time);
  };
  protoOf(ExampleScene).updateViewportSize = function (width, height) {
    protoOf(Scene).updateViewportSize.call(this, width, height);
  };
  protoOf(ExampleScene).initialize = function () {
  };
  protoOf(ExampleScene).animate = function () {
    this.calculateProjection();
    var cameraPositionInterpolator = this.cameraAnimator.positionInterpolator;
    var eye = cameraPositionInterpolator.cameraPosition;
    var lookat = cameraPositionInterpolator.cameraRotation;
    if (!this.useExternalViewMatrix) {
      Matrix_getInstance().dh(this.matView, 0, eye.x, eye.y, eye.z, lookat.x, lookat.y, lookat.z, 0.0, 0.0, 1.0);
    }
    this.updateMeshTransformations(this.commands);
    var tmp = this.uniformsDiffuseTest.s(0);
    this.setMvpUniform(tmp instanceof UniformFloatValue ? tmp : THROW_CCE(), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 8.0, 8.0);
    // Inline function 'kotlin.math.min' call
    var a = this.timers.ni(Timers_AnimalAnimation_getInstance()) * 1.1;
    var timer = Math.min(a, 1.0);
    this.setMvpUniform(this.uniformsAnimated.s(0), 1.554, -0.796, -2.327, 0.0, 0.0, 0.0, 0.4, 0.4, 0.4);
    setUniform(this.uniformsAnimated.s(1), 0.1640625, 0.1484375, 0.1171875, 1.0);
    setUniform_2(this.uniformsAnimated.s(2), this.animationAnimal.mb_1);
    setUniform_1(this.uniformsAnimated.s(3), 1.0 / this.animationAnimal.rb_1);
    setUniform(this.uniformsAnimated.s(5), this.animationAnimal.mb_1, this.animationAnimal.ob_1, this.animationAnimal.tb(timer), this.animationAnimal.sb_1);
    setUniform_1(this.uniformsWaterHighlights.s(2), this.timers.ni(Timers_Water_getInstance_1()) * get_PI() * 2.0);
  };
  var Timers_Clouds1_instance;
  var Timers_Clouds2_instance;
  var Timers_BirdsFly_instance_0;
  var Timers_Camera_instance_2;
  var Timers_Water_instance_1;
  var Timers_BirdWings1_instance_0;
  var Timers_BirdWings2_instance_0;
  var Timers_AnimalAnimation_instance;
  var Timers_ShootingStar_instance;
  var Timers_entriesInitialized_2;
  function Timers_initEntries_2() {
    if (Timers_entriesInitialized_2)
      return Unit_instance;
    Timers_entriesInitialized_2 = true;
    Timers_Clouds1_instance = new Timers_2('Clouds1', 0);
    Timers_Clouds2_instance = new Timers_2('Clouds2', 1);
    Timers_BirdsFly_instance_0 = new Timers_2('BirdsFly', 2);
    Timers_Camera_instance_2 = new Timers_2('Camera', 3);
    Timers_Water_instance_1 = new Timers_2('Water', 4);
    Timers_BirdWings1_instance_0 = new Timers_2('BirdWings1', 5);
    Timers_BirdWings2_instance_0 = new Timers_2('BirdWings2', 6);
    Timers_AnimalAnimation_instance = new Timers_2('AnimalAnimation', 7);
    Timers_ShootingStar_instance = new Timers_2('ShootingStar', 8);
  }
  function Timers_2(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Timers_Clouds1_getInstance() {
    Timers_initEntries_2();
    return Timers_Clouds1_instance;
  }
  function Timers_Clouds2_getInstance() {
    Timers_initEntries_2();
    return Timers_Clouds2_instance;
  }
  function Timers_BirdsFly_getInstance_0() {
    Timers_initEntries_2();
    return Timers_BirdsFly_instance_0;
  }
  function Timers_Camera_getInstance_1() {
    Timers_initEntries_2();
    return Timers_Camera_instance_2;
  }
  function Timers_Water_getInstance_1() {
    Timers_initEntries_2();
    return Timers_Water_instance_1;
  }
  function Timers_BirdWings1_getInstance_0() {
    Timers_initEntries_2();
    return Timers_BirdWings1_instance_0;
  }
  function Timers_BirdWings2_getInstance_0() {
    Timers_initEntries_2();
    return Timers_BirdWings2_instance_0;
  }
  function Timers_AnimalAnimation_getInstance() {
    Timers_initEntries_2();
    return Timers_AnimalAnimation_instance;
  }
  function Timers_ShootingStar_getInstance() {
    Timers_initEntries_2();
    return Timers_ShootingStar_instance;
  }
  function Cameras_3() {
    Cameras_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ky_1 = [new CameraPositionPair(new CameraPosition(new Vec3(182.522, 451.945, 100.426994), new Vec3(95.628395, -240.9175, 179.154)), new CameraPosition(new Vec3(-343.592, 309.3397, 121.102), new Vec3(-48.3742, -284.307, 183.019)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(466.2929, -304.8695, 30.390701), new Vec3(-343.613, 27.9626, 220.6635)), new CameraPosition(new Vec3(563.2295, 19.3432, 24.534698), new Vec3(-218.45789, 183.19339, 193.65689)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-17.8381, -512.5913, 60.937397), new Vec3(-276.7568, 195.7981, 179.154)), new CameraPosition(new Vec3(502.0434, -225.924, 73.5525), new Vec3(-59.8787, 269.7749, 205.40071)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-620.36957, -208.8635, 52.049202), new Vec3(216.4319, -70.2999, 243.01979)), new CameraPosition(new Vec3(-536.29553, -347.5239, 66.9248), new Vec3(245.4221, 141.5389, 220.25499)), 1.0), new CameraPositionPair(new CameraPosition(new Vec3(-405.834, 809.1909, 140.3126), new Vec3(195.42691, -167.5669, 264.4845)), new CameraPosition(new Vec3(-586.92596, -130.8418, 24.389801), new Vec3(195.42691, -167.5669, 220.6635)), 1.0)];
  }
  var Cameras_instance_3;
  function Cameras_getInstance_3() {
    if (Cameras_instance_3 == null)
      new Cameras_3();
    return Cameras_instance_3;
  }
  function Meshes_2() {
    Meshes_instance_2 = this;
    this.ly_1 = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0), new MeshAttribute(AttributeType_UV0_getInstance(), VertexFormat_HALF2_getInstance(), 6)]), 12);
    this.my_1 = new MeshAttributes(listOf_0(new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0)), 8);
    this.ny_1 = new MeshAttributes(listOf_0(new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_FLOAT3_getInstance(), 0)), 12);
    this.oy_1 = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0), new MeshAttribute(AttributeType_UV0_getInstance(), VertexFormat_HALF2_getInstance(), 6), new MeshAttribute(AttributeType_NORMAL_getInstance(), VertexFormat_HALF3_getInstance(), 10)]), 16);
    this.py_1 = new MeshAttributes(listOf([new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_HALF3_getInstance(), 0), new MeshAttribute(AttributeType_UV0_getInstance(), VertexFormat_UBYTE2_NORMALIZED_getInstance(), 6)]), 8);
    this.qy_1 = new MeshAttributes(listOf_0(new MeshAttribute(AttributeType_VERTEX_getInstance(), VertexFormat_FLOAT3_getInstance(), 0)), 12);
    this.ry_1 = MeshConstructor2('sky', this.ly_1);
    this.sy_1 = MeshConstructor2('stars', this.ny_1);
    this.ty_1 = MeshConstructor2('building-1', this.oy_1);
    this.uy_1 = MeshConstructor2('buildings-distant', this.py_1);
    this.vy_1 = MeshConstructor2('red-lamps', this.my_1);
    this.wy_1 = MeshConstructor2('islands', this.my_1);
    this.xy_1 = MeshConstructor2('water', this.my_1);
    this.yy_1 = MeshConstructor2('neon-signs', this.py_1);
    this.zy_1 = MeshConstructor2('red-lights', this.qy_1);
    this.az_1 = mutableListOf([this.ry_1, this.sy_1, this.ty_1, this.uy_1, this.vy_1, this.wy_1, this.xy_1, this.yy_1, this.zy_1]);
  }
  var Meshes_instance_2;
  function Meshes_getInstance_2() {
    if (Meshes_instance_2 == null)
      new Meshes_2();
    return Meshes_instance_2;
  }
  function SkyscrapersScene() {
    Scene.call(this);
    this.gz_1 = new TimersMap();
    this.hz_1 = 1000000.0;
    this.iz_1 = 29000.0;
    this.jz_1 = 2600.0;
    this.tz_1 = mutableListOf([get_HINT_VRS_2X2()]);
    this.uz_1 = 100.0;
    this.PIf = 3.1415927;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.vz_1 = new Float32Array([0.145, 0.137, 0.141, 1.0]);
    this.wz_1 = 2300.0;
    this.xz_1 = 2500.0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    var tmp_1 = UniformFloatValueWithArray(this.vz_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$1 = new Float32Array([this.wz_1]);
    var tmp_2 = UniformFloatValueWithArray(tmp$ret$1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$2 = new Float32Array([this.xz_1]);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.yz_1 = [tmp_1, tmp_2, UniformFloatValueWithArray(tmp$ret$2)];
    this.zz_1 = 990.0;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([3.0]);
    var tmp_4 = UniformFloatValueWithArray(tmp$ret$6);
    var tmp_5 = new UniformTextureValue(Textures_getInstance_2().p10_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([1.2, 1.2, 1.2, 1.0]);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_3.g10_1 = [tmp_4, tmp_5, UniformFloatValueWithArray(tmp$ret$7)];
    this.meshes = Meshes_getInstance_2().az_1;
    this.textures = Textures_getInstance_2().r10_1;
    this.shaders = Shaders_getInstance_2().a11_1;
    Companion_instance_3.b11(this.gz_1);
    this.Z_NEAR = 100.0;
    this.Z_FAR = 20000.0;
    this.FOV_LANDSCAPE = 25.0;
    this.FOV_PORTRAIT = 25.0;
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new SkyscrapersSettings();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_0.cameraPeriod = 1.0;
    this_0.vignette = true;
    this_0.blurred = false;
    this_0.autoSwitchCameras = true;
    this_0.lowQuality = false;
    this_0.clock = false;
    tmp_6.settings = this_0;
    this.cameraAnimator = new CameraPathAnimator(this.hz_1, this.iz_1, this.jz_1, true);
    this.cameraAnimator.setCameras(Cameras_getInstance_3().ky_1);
    this.cameraAnimator.minDurationCoefficient = this.settings.cameraPeriod;
    var tmp_7 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new ClearColorCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_1.color = new Vec4(0.0, 0.0392156862745098, 0.0784313725490196, 1.0);
    this_1.name = 'clear color';
    this_1.enabled = true;
    tmp_7.pz_1 = this_1;
    // Inline function 'kotlin.apply' call
    var this_2 = new ClearColorCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_2.color = new Vec4(0.0, 0.0, 0.0, 1.0);
    this_2.name = 'clear color bloom';
    this_2.enabled = true;
    var clearColorBloomCommand = this_2;
    var txSceneObjects = new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.uz_1, this.uz_1, this.uz_1));
    var stateSky = new DrawMeshState(Shaders_getInstance_2().t10_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 6)]), 12));
    var commandSky = DrawStaticMeshCommandConstructor(Meshes_getInstance_2().ry_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_2().h10_1), new UniformTextureValue(Textures_getInstance_2().i10_1)]), stateSky, txSceneObjects);
    var stateStars = new DrawMeshState(Shaders_getInstance_2().u10_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_FLOAT3_getInstance(), 0)), 12));
    var tmp_8 = this;
    // Inline function 'kotlin.apply' call
    var tmp_9 = Meshes_getInstance_2().sy_1;
    var tmp_10 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$14 = new Float32Array([0.35, 0.35, 0.35, 1.0]);
    var this_3 = new DrawTransformedMeshCommand(tmp_9, listOf([tmp_10, UniformFloatValueWithArray(tmp$ret$14)]), stateStars, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 0.0), new Vec3(0.055, 0.055, 0.055)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_3.hints = this.tz_1;
    tmp_8.commandStars = this_3;
    var stateBuilding = new DrawMeshState(Shaders_getInstance_2().v10_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_HALF2_getInstance(), 6), new VertexAttribute(AttributeType_NORMAL_getInstance(), 2, VertexFormat_HALF3_getInstance(), 10)]), 16));
    var tmp_11 = this;
    // Inline function 'kotlin.apply' call
    var tmp_12 = Meshes_getInstance_2().ty_1;
    var tmp_13 = UniformFloatValueWithArray(new Float32Array(16));
    var tmp_14 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$16 = new Float32Array([0.707106, 0.707106, 0.0]);
    var tmp_15 = UniformFloatValueWithArray(tmp$ret$16);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$17 = new Float32Array([0.05, 0.6]);
    var tmp_16 = UniformFloatValueWithArray(tmp$ret$17);
    var tmp_17 = UniformFloatValueWithArray(new Float32Array(3));
    var tmp_18 = new UniformTextureValue(Textures_getInstance_2().j10_1);
    var tmp_19 = new UniformTextureValue(Textures_getInstance_2().k10_1);
    var tmp_20 = new UniformTextureValue(Textures_getInstance_2().l10_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$18 = new Float32Array([0.33, 0.33, 0.33, 1.0]);
    var tmp_21 = UniformFloatValueWithArray(tmp$ret$18);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$19 = new Float32Array([0.3, 0.3, 0.3, 1.0]);
    var tmp_22 = UniformFloatValueWithArray(tmp$ret$19);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$20 = new Float32Array([1.8]);
    var tmp_23 = UniformFloatValueWithArray(tmp$ret$20);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$21 = new Float32Array([0.0]);
    var this_4 = DrawStaticMeshCommandConstructor(tmp_12, listOf([tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, UniformFloatValueWithArray(tmp$ret$21)]), stateBuilding, txSceneObjects);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_4.indexUniformModel = 1;
    tmp_11.commandBuildings = this_4;
    var tmp_24 = this;
    // Inline function 'kotlin.apply' call
    var tmp_25 = Meshes_getInstance_2().ty_1;
    var tmp_26 = UniformFloatValueWithArray(new Float32Array(16));
    var tmp_27 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$23 = new Float32Array([0.707106, 0.707106, 0.0]);
    var tmp_28 = UniformFloatValueWithArray(tmp$ret$23);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$24 = new Float32Array([0.05, 0.6]);
    var tmp_29 = UniformFloatValueWithArray(tmp$ret$24);
    var tmp_30 = UniformFloatValueWithArray(new Float32Array(3));
    var tmp_31 = new UniformTextureValue(Textures_getInstance_2().j10_1);
    var tmp_32 = new UniformTextureValue(Textures_getInstance_2().k10_1);
    var tmp_33 = new UniformTextureValue(Textures_getInstance_2().l10_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$25 = new Float32Array([0.0, 0.0, 0.0, 1.0]);
    var tmp_34 = UniformFloatValueWithArray(tmp$ret$25);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$26 = new Float32Array([0.0, 0.0, 0.0, 1.0]);
    var tmp_35 = UniformFloatValueWithArray(tmp$ret$26);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$27 = new Float32Array([2.0]);
    var tmp_36 = UniformFloatValueWithArray(tmp$ret$27);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$28 = new Float32Array([0.0]);
    var this_5 = DrawStaticMeshCommandConstructor(tmp_25, listOf([tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, UniformFloatValueWithArray(tmp$ret$28)]), stateBuilding, txSceneObjects);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_5.indexUniformModel = 1;
    tmp_24.commandBuildingsBloom = this_5;
    var stateRed = new DrawMeshState(Shaders_getInstance_2().u10_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0)), 8));
    // Inline function 'kotlin.apply' call
    var tmp_37 = Meshes_getInstance_2().vy_1;
    var tmp_38 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$30 = new Float32Array([1.0, 0.3, 0.3, 1.0]);
    var this_6 = new DrawTransformedMeshCommand(tmp_37, listOf([tmp_38, UniformFloatValueWithArray(tmp$ret$30)]), stateRed, txSceneObjects);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_6.hints = this.tz_1;
    var commandRed = this_6;
    var stateDistant = new DrawMeshState(Shaders_getInstance_2().w10_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_BYTE2_NORMALIZED_getInstance(), 6)]), 8));
    var commandBuildingsDistant = DrawStaticMeshCommandConstructor(Meshes_getInstance_2().uy_1, listOf(arrayConcat([[UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_2().m10_1)], this.yz_1])), stateDistant, txSceneObjects);
    var commandBuildingsDistant2 = DrawStaticMeshCommandConstructor(Meshes_getInstance_2().uy_1, listOf(arrayConcat([[UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_2().m10_1)], this.yz_1])), stateDistant, new AffineTranformation(new Vec3(0.0, 0.0, 0.0), new Vec3(0.0, 0.0, 180.0), new Vec3(this.uz_1, this.uz_1, this.uz_1)));
    var stateGround = new DrawMeshState(Shaders_getInstance_2().x10_1, get_BLENDING_NONE(), get_DEPTH_TEST_ENABLED(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0)), 8));
    var tmp_39 = Meshes_getInstance_2().wy_1;
    var tmp_40 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$32 = new Float32Array([0.1171875, 0.1171875, 0.1171875, 1.0]);
    var commandIslands1 = DrawStaticMeshCommandConstructor(tmp_39, listOf(arrayConcat([[tmp_40, UniformFloatValueWithArray(tmp$ret$32)], this.yz_1])), stateGround, txSceneObjects);
    var tmp_41 = Meshes_getInstance_2().xy_1;
    var tmp_42 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$33 = new Float32Array([0.0, 0.01953125, 0.01953125, 1.0]);
    var commandWater = DrawStaticMeshCommandConstructor(tmp_41, listOf(arrayConcat([[tmp_42, UniformFloatValueWithArray(tmp$ret$33)], this.yz_1])), stateGround, txSceneObjects);
    var tmp_43 = Shaders_getInstance_2().s10_1;
    // Inline function 'kotlin.apply' call
    var this_7 = new Blending();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_7.enabled = true;
    this_7.sourceFactorColor = BlendingFactor_ONE_getInstance();
    this_7.destinationFactorColor = BlendingFactor_ONE_getInstance();
    this_7.isSeparateAlpha = false;
    var stateNeon = new DrawMeshState(tmp_43, this_7, get_DEPTH_NO_WRITE(), CullFace_BACK_getInstance(), new VertexAttributesDescriptor(listOf([new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_HALF3_getInstance(), 0), new VertexAttribute(AttributeType_UV0_getInstance(), 1, VertexFormat_UBYTE2_NORMALIZED_getInstance(), 6)]), 8));
    var commandNeon = DrawStaticMeshCommandConstructor(Meshes_getInstance_2().yy_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_2().n10_1)]), stateNeon, txSceneObjects);
    var commandNeonBloom = DrawStaticMeshCommandConstructor(Meshes_getInstance_2().yy_1, listOf([UniformFloatValueWithArray(new Float32Array(16)), new UniformTextureValue(Textures_getInstance_2().q10_1)]), stateNeon, txSceneObjects);
    var tmp_44 = Shaders_getInstance_2().y10_1;
    // Inline function 'kotlin.apply' call
    var this_8 = new Blending();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_8.enabled = true;
    this_8.sourceFactorColor = BlendingFactor_ONE_getInstance();
    this_8.destinationFactorColor = BlendingFactor_ONE_getInstance();
    this_8.isSeparateAlpha = false;
    var stateRedSprites = new DrawMeshState(tmp_44, this_8, get_DEPTH_NO_WRITE(), CullFace_DISABLED_getInstance(), new VertexAttributesDescriptor(listOf_0(new VertexAttribute(AttributeType_VERTEX_getInstance(), 0, VertexFormat_FLOAT3_getInstance(), 0)), 12));
    // Inline function 'kotlin.apply' call
    var tmp_45 = Meshes_getInstance_2().zy_1;
    var tmp_46 = UniformFloatValueWithArray(new Float32Array(16));
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$36 = new Float32Array([4.0]);
    var tmp_47 = UniformFloatValueWithArray(tmp$ret$36);
    var tmp_48 = new UniformTextureValue(Textures_getInstance_2().o10_1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$37 = new Float32Array([1.0, 0.2, 0.2, 1.0]);
    var this_9 = DrawStaticMeshCommandConstructor(tmp_45, listOf([tmp_46, tmp_47, tmp_48, UniformFloatValueWithArray(tmp$ret$37)]), stateRedSprites, txSceneObjects);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_9.primitiveType = PrimitiveType_POINTS_getInstance();
    var commandRedSprites = this_9;
    var tmp_49 = Shaders_getInstance_2().z10_1;
    // Inline function 'kotlin.apply' call
    var this_10 = new Blending();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_10.enabled = true;
    this_10.sourceFactorColor = BlendingFactor_ONE_getInstance();
    this_10.destinationFactorColor = BlendingFactor_ONE_getInstance();
    this_10.isSeparateAlpha = false;
    var statePlanes = new DrawMeshState(tmp_49, this_10, get_DEPTH_NO_WRITE(), CullFace_DISABLED_getInstance(), null);
    var tmp_50 = this;
    // Inline function 'kotlin.apply' call
    var this_11 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[UniformFloatValueWithArray(new Float32Array(16))], this.g10_1])), statePlanes, new AffineTranformation(new Vec3(0.0, 0.0, 380.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.uz_1, this.uz_1, this.uz_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_11.primitiveType = PrimitiveType_POINTS_getInstance();
    this_11.primitiveCount = 1;
    tmp_50.a10_1 = this_11;
    var tmp_51 = this;
    // Inline function 'kotlin.apply' call
    var this_12 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[UniformFloatValueWithArray(new Float32Array(16))], this.g10_1])), statePlanes, new AffineTranformation(new Vec3(0.0, 0.0, 400.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.uz_1, this.uz_1, this.uz_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_12.primitiveType = PrimitiveType_POINTS_getInstance();
    this_12.primitiveCount = 1;
    tmp_51.b10_1 = this_12;
    var tmp_52 = this;
    // Inline function 'kotlin.apply' call
    var this_13 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[UniformFloatValueWithArray(new Float32Array(16))], this.g10_1])), statePlanes, new AffineTranformation(new Vec3(0.0, 0.0, 350.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.uz_1, this.uz_1, this.uz_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_13.primitiveType = PrimitiveType_POINTS_getInstance();
    this_13.primitiveCount = 1;
    tmp_52.c10_1 = this_13;
    var tmp_53 = this;
    // Inline function 'kotlin.apply' call
    var this_14 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[UniformFloatValueWithArray(new Float32Array(16))], this.g10_1])), statePlanes, new AffineTranformation(new Vec3(0.0, 0.0, 450.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.uz_1, this.uz_1, this.uz_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_14.primitiveType = PrimitiveType_POINTS_getInstance();
    this_14.primitiveCount = 1;
    tmp_53.d10_1 = this_14;
    var tmp_54 = this;
    // Inline function 'kotlin.apply' call
    var this_15 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[UniformFloatValueWithArray(new Float32Array(16))], this.g10_1])), statePlanes, new AffineTranformation(new Vec3(0.0, 0.0, 430.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.uz_1, this.uz_1, this.uz_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_15.primitiveType = PrimitiveType_POINTS_getInstance();
    this_15.primitiveCount = 1;
    tmp_54.e10_1 = this_15;
    var tmp_55 = this;
    // Inline function 'kotlin.apply' call
    var this_16 = new DrawTransformedMeshCommand(null, listOf(arrayConcat([[UniformFloatValueWithArray(new Float32Array(16))], this.g10_1])), statePlanes, new AffineTranformation(new Vec3(0.0, 0.0, 500.0), new Vec3(0.0, 0.0, 0.0), new Vec3(this.uz_1, this.uz_1, this.uz_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_16.primitiveType = PrimitiveType_POINTS_getInstance();
    this_16.primitiveCount = 1;
    tmp_55.f10_1 = this_16;
    var tmp_56 = this;
    // Inline function 'kotlin.apply' call
    var this_17 = new ClearCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_17.clearType = ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
    tmp_56.oz_1 = GroupCommandArr(true, [this.pz_1, this_17]);
    // Inline function 'kotlin.apply' call
    var this_18 = new ClearCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_18.clearType = ClearCommandClearType_COLOR_AND_DEPTH_getInstance();
    var groupClearBloom = GroupCommandArr(true, [clearColorBloomCommand, this_18]);
    var tmp_57 = this;
    // Inline function 'kotlin.apply' call
    var this_19 = new VignetteCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_19.color0 = new Vec4(0.45, 0.45, 0.45, 1.0);
    this_19.color1 = new Vec4(1.0, 1.0, 1.0, 1.0);
    tmp_57.qz_1 = this_19;
    var groupBloomPass = GroupCommandArr(true, [this.commandBuildingsBloom, commandRedSprites, commandNeonBloom]);
    var tmp_58 = this;
    // Inline function 'kotlin.apply' call
    var this_20 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_20.name = 'bloom-objects';
    this_20.enabled = true;
    this_20.minSize = 180;
    this_20.brightness = 1.0;
    this_20.blurSize = BlurSize_KERNEL_4_getInstance();
    this_20.commands = mutableListOf([groupClearBloom, groupBloomPass]);
    this_20.id = 0;
    tmp_58.nz_1 = this_20;
    var tmp_59 = this;
    // Inline function 'kotlin.apply' call
    var this_21 = new DrawBlurredCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_21.name = 'draw bloom';
    var tmp_60 = this_21;
    // Inline function 'kotlin.apply' call
    var this_22 = new Blending();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>.<anonymous>' call
    this_22.enabled = true;
    this_22.equationColor = BlendingEquation_ADD_getInstance();
    this_22.sourceFactorColor = BlendingFactor_ONE_getInstance();
    this_22.destinationFactorColor = BlendingFactor_ONE_getInstance();
    tmp_60.blending = this_22;
    tmp_59.sz_1 = this_21;
    this.kz_1 = GroupCommandArr(true, [this.nz_1, MainPassCommandArr(true, [this.oz_1, this.commandBuildings, commandRed, commandBuildingsDistant, commandBuildingsDistant2, commandIslands1, commandWater, this.commandStars, commandSky, this.a10_1, this.b10_1, this.c10_1, this.d10_1, this.e10_1, this.f10_1, commandNeon, this.sz_1, this.qz_1])]);
    var tmp_61 = this;
    // Inline function 'kotlin.apply' call
    var this_23 = new BlurredPassCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_23.name = 'blurred-main';
    this_23.enabled = true;
    this_23.minSize = 180;
    this_23.brightness = 0.95;
    this_23.blurSize = BlurSize_KERNEL_4_getInstance();
    this_23.commands = mutableListOf([groupClearBloom, this.commandBuildings, commandBuildingsDistant, commandBuildingsDistant2, commandIslands1, commandWater, commandSky, commandNeon, this.qz_1]);
    tmp_61.mz_1 = this_23;
    var tmp_62 = this;
    // Inline function 'kotlin.apply' call
    var this_24 = new DrawBlurredCommand();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.SkyscrapersScene.<anonymous>' call
    this_24.name = 'draw blurred';
    this_24.blending = get_BLENDING_NONE();
    tmp_62.rz_1 = this_24;
    this.lz_1 = GroupCommandArr(false, [this.mz_1, MainPassCommandArr(true, [this.oz_1, this.rz_1])]);
    this.commands = mutableListOf([this.kz_1, this.lz_1]);
  }
  protoOf(SkyscrapersScene).gn = function () {
    return this.cameraAnimator;
  };
  protoOf(SkyscrapersScene).in = function () {
    return this.settings;
  };
  protoOf(SkyscrapersScene).mn = function () {
    return this.commandStars;
  };
  protoOf(SkyscrapersScene).c11 = function () {
    return this.commandBuildings;
  };
  protoOf(SkyscrapersScene).d11 = function () {
    return this.commandBuildingsBloom;
  };
  protoOf(SkyscrapersScene).yn = function () {
    return this.PIf;
  };
  protoOf(SkyscrapersScene).updateTimers = function (time) {
    this.gz_1.qi(time);
    this.cameraAnimator.animate(time);
    this.animate();
    protoOf(Scene).updateTimers.call(this, time);
  };
  protoOf(SkyscrapersScene).updateViewportSize = function (width, height) {
    protoOf(Scene).updateViewportSize.call(this, width, height);
  };
  protoOf(SkyscrapersScene).initialize = function () {
  };
  protoOf(SkyscrapersScene).applySettings = function () {
    this.kz_1.enabled = !this.settings.blurred;
    this.lz_1.enabled = this.settings.blurred;
    this.qz_1.enabled = this.settings.vignette;
    this.mz_1.additionalBlur = !this.settings.lowQuality;
    this.nz_1.additionalBlur = !this.settings.lowQuality;
    setUniform_1(this.commandBuildings.uniforms.s(11), 1.0 - this.settings.lights);
    setUniform_1(this.commandBuildingsBloom.uniforms.s(11), 1.0 - this.settings.lights);
    if (!(this.cameraAnimator.minDurationCoefficient === this.settings.cameraPeriod)) {
      this.cameraAnimator.minDurationCoefficient = this.settings.cameraPeriod;
    }
    if ((this.cameraAnimator.timer > 0.99 ? this.settings.autoSwitchCameras : false) ? Default_getInstance().v5() < 0.5 : false) {
      this.randomCamera();
    }
  };
  protoOf(SkyscrapersScene).animate = function () {
    this.applySettings();
    this.calculateProjection();
    var cameraPositionInterpolator = this.cameraAnimator.positionInterpolator;
    var eye = cameraPositionInterpolator.cameraPosition;
    var lookat = cameraPositionInterpolator.cameraRotation;
    if (!this.useExternalViewMatrix) {
      Matrix_getInstance().dh(this.matView, 0, eye.x, eye.y, eye.z, lookat.x, lookat.y, lookat.z, 0.0, 0.0, 1.0);
    }
    this.updatePlanes();
    this.updateMeshTransformations(this.commands);
    setUniform_5(this.commandBuildings.uniforms.s(4), eye);
    setUniform_5(this.commandBuildingsBloom.uniforms.s(4), eye);
  };
  protoOf(SkyscrapersScene).updatePlanes = function () {
    var angle1 = this.gz_1.ni(Timers_Planes1_getInstance()) * this.PIf * 2.0;
    var angle2 = this.gz_1.ni(Timers_Planes2_getInstance()) * this.PIf * 2.0;
    this.updatePlanePosition(angle1, 0.0, 0.0, this.a10_1.transform.q9_1);
    this.updatePlanePosition(-angle2 - this.PIf, 0.0, -400.0, this.b10_1.transform.q9_1);
    this.updatePlanePosition(-angle1 - this.PIf, 0.0, 300.0, this.c10_1.transform.q9_1);
    this.updatePlanePosition(angle2, 100.0, 300.0, this.d10_1.transform.q9_1);
    this.updatePlanePosition(angle1 + this.PIf / 2.0, 100.0, 300.0, this.e10_1.transform.q9_1);
    this.updatePlanePosition(angle2 + this.PIf / 1.5, 100.0, 300.0, this.f10_1.transform.q9_1);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.min' call
    var a = this.viewportWidth;
    var b = this.viewportHeight;
    var b_0 = Math.min(a, b) / 300.0;
    var size = Math.max(2.5, b_0);
    setUniform_1(this.a10_1.uniforms.s(1), size);
  };
  protoOf(SkyscrapersScene).updatePlanePosition = function (angle, centerX, centerY, result) {
    // Inline function 'kotlin.math.sin' call
    result.x = Math.sin(angle) * this.zz_1 + centerX;
    // Inline function 'kotlin.math.cos' call
    result.y = Math.cos(angle) * this.zz_1 + centerY;
  };
  protoOf(SkyscrapersScene).nextCamera = function () {
    this.cameraAnimator.nextCamera();
  };
  protoOf(SkyscrapersScene).randomCamera = function () {
    if (this.cameraAnimator.state.equals(CameraState_TRANSITIONING_getInstance())) {
      return Unit_instance;
    }
    this.cameraAnimator.positionInterpolator.reverse = Default_getInstance().v5() < 0.5;
    this.cameraAnimator.randomCamera();
  };
  protoOf(SkyscrapersScene).changeSpeed = function (impulse) {
    this.cameraAnimator.changeDirection(impulse);
  };
  function SkyscrapersSettings() {
    this.cameraPeriod = 1.0;
    this.vignette = true;
    this.blurred = false;
    this.autoSwitchCameras = true;
    this.lowQuality = false;
    this.clock = false;
    this.lights = 1.0;
  }
  protoOf(SkyscrapersSettings).bo = function (_set____db54di) {
    this.cameraPeriod = _set____db54di;
  };
  protoOf(SkyscrapersSettings).co = function () {
    return this.cameraPeriod;
  };
  protoOf(SkyscrapersSettings).do = function (_set____db54di) {
    this.vignette = _set____db54di;
  };
  protoOf(SkyscrapersSettings).eo = function () {
    return this.vignette;
  };
  protoOf(SkyscrapersSettings).fo = function (_set____db54di) {
    this.blurred = _set____db54di;
  };
  protoOf(SkyscrapersSettings).go = function () {
    return this.blurred;
  };
  protoOf(SkyscrapersSettings).ho = function (_set____db54di) {
    this.autoSwitchCameras = _set____db54di;
  };
  protoOf(SkyscrapersSettings).io = function () {
    return this.autoSwitchCameras;
  };
  protoOf(SkyscrapersSettings).no = function (_set____db54di) {
    this.lowQuality = _set____db54di;
  };
  protoOf(SkyscrapersSettings).oo = function () {
    return this.lowQuality;
  };
  protoOf(SkyscrapersSettings).lo = function (_set____db54di) {
    this.clock = _set____db54di;
  };
  protoOf(SkyscrapersSettings).mo = function () {
    return this.clock;
  };
  protoOf(SkyscrapersSettings).e11 = function (_set____db54di) {
    this.lights = _set____db54di;
  };
  protoOf(SkyscrapersSettings).f11 = function () {
    return this.lights;
  };
  function Shaders_2() {
    Shaders_instance_2 = this;
    this.s10_1 = new Shader('Diffuse');
    this.t10_1 = new Shader('SkyDither');
    this.u10_1 = new Shader('Color');
    this.v10_1 = new Shader('Building');
    this.w10_1 = new Shader('DiffuseFog');
    this.x10_1 = new Shader('ColorFog');
    this.y10_1 = new Shader('PointSpritesColored');
    this.z10_1 = new Shader('PointSpriteColored');
    this.a11_1 = mutableListOf([this.s10_1, this.t10_1, this.u10_1, this.v10_1, this.w10_1, this.x10_1, this.y10_1, this.z10_1]);
  }
  var Shaders_instance_2;
  function Shaders_getInstance_2() {
    if (Shaders_instance_2 == null)
      new Shaders_2();
    return Shaders_instance_2;
  }
  function Textures_2() {
    Textures_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.Textures.texSky.<anonymous>' call
    this_0.name = 'sky-night';
    this_0.fileName = 'sky-night';
    this_0.format = TextureFormat_ASTC_getInstance();
    this_0.minFilter = TextureFiltering_LINEAR_getInstance();
    this_0.magFilter = TextureFiltering_LINEAR_getInstance();
    this_0.wrapping = TextureWrapping_CLAMP_TO_EDGE_getInstance();
    tmp.h10_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.Textures.texNoise.<anonymous>' call
    this_1.name = 'blue-noise-16';
    this_1.fileName = 'blue-noise-16';
    this_1.format = TextureFormat_ASTC_getInstance();
    this_1.minFilter = TextureFiltering_NEAREST_getInstance();
    this_1.magFilter = TextureFiltering_NEAREST_getInstance();
    tmp_0.i10_1 = this_1;
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var this_2 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.Textures.texBuildingsDiffuse.<anonymous>' call
    this_2.name = 'diffuse2';
    this_2.fileName = 'diffuse2';
    this_2.format = TextureFormat_ASTC_getInstance();
    this_2.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_2.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_2.mipmaps = 11;
    tmp_1.j10_1 = this_2;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_3 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.Textures.texBuildingsEmission.<anonymous>' call
    this_3.name = 'emission2';
    this_3.fileName = 'emission2';
    this_3.format = TextureFormat_ASTC_getInstance();
    this_3.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_3.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_3.mipmaps = 11;
    tmp_2.k10_1 = this_3;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    var this_4 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.Textures.texBuildingsCubemap.<anonymous>' call
    this_4.type = TextureType_CUBEMAP_getInstance();
    this_4.name = 'cubemaps/1/sky';
    this_4.fileName = 'cubemaps/1/sky';
    this_4.format = TextureFormat_ASTC_getInstance();
    this_4.minFilter = TextureFiltering_LINEAR_getInstance();
    this_4.magFilter = TextureFiltering_LINEAR_getInstance();
    tmp_3.l10_1 = this_4;
    var tmp_4 = this;
    // Inline function 'kotlin.apply' call
    var this_5 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.Textures.texBuildingsDistant.<anonymous>' call
    this_5.name = 'distant';
    this_5.fileName = 'distant';
    this_5.format = TextureFormat_ASTC_getInstance();
    this_5.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_5.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_5.mipmaps = 8;
    tmp_4.m10_1 = this_5;
    var tmp_5 = this;
    // Inline function 'kotlin.apply' call
    var this_6 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.Textures.texNeon.<anonymous>' call
    this_6.name = 'neon';
    this_6.fileName = 'neon';
    this_6.format = TextureFormat_ASTC_getInstance();
    this_6.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_6.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_6.mipmaps = 9;
    tmp_5.n10_1 = this_6;
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_7 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.Textures.texFlare.<anonymous>' call
    this_7.name = 'flare';
    this_7.fileName = 'flare';
    this_7.format = TextureFormat_ASTC_getInstance();
    this_7.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_7.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_7.mipmaps = 3;
    tmp_6.o10_1 = this_7;
    var tmp_7 = this;
    // Inline function 'kotlin.apply' call
    var this_8 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.Textures.texDust.<anonymous>' call
    this_8.name = 'dust';
    this_8.fileName = 'dust';
    this_8.format = TextureFormat_ASTC_getInstance();
    this_8.minFilter = TextureFiltering_NEAREST_getInstance();
    this_8.magFilter = TextureFiltering_NEAREST_getInstance();
    tmp_7.p10_1 = this_8;
    var tmp_8 = this;
    // Inline function 'kotlin.apply' call
    var this_9 = new Texture();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.androidworks.skyscrapers.Textures.texNeon2.<anonymous>' call
    this_9.name = 'neon2';
    this_9.fileName = 'neon2';
    this_9.format = TextureFormat_ASTC_getInstance();
    this_9.minFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_9.magFilter = TextureFiltering_LINEAR_MIPMAP_LINEAR_getInstance();
    this_9.mipmaps = 5;
    tmp_8.q10_1 = this_9;
    this.r10_1 = mutableListOf([this.h10_1, this.i10_1, this.j10_1, this.k10_1, this.l10_1, this.m10_1, this.n10_1, this.o10_1, this.p10_1, this.q10_1]);
  }
  var Textures_instance_2;
  function Textures_getInstance_2() {
    if (Textures_instance_2 == null)
      new Textures_2();
    return Textures_instance_2;
  }
  var Timers_Planes1_instance;
  var Timers_Planes2_instance;
  function Companion_3() {
  }
  protoOf(Companion_3).b11 = function (timers) {
    timers.li(Timers_Planes1_getInstance(), 80000.0);
    timers.li(Timers_Planes2_getInstance(), 70000.0);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  var Timers_entriesInitialized_3;
  function Timers_initEntries_3() {
    if (Timers_entriesInitialized_3)
      return Unit_instance;
    Timers_entriesInitialized_3 = true;
    Timers_Planes1_instance = new Timers_3('Planes1', 0);
    Timers_Planes2_instance = new Timers_3('Planes2', 1);
  }
  function Timers_3(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Timers_Planes1_getInstance() {
    Timers_initEntries_3();
    return Timers_Planes1_instance;
  }
  function Timers_Planes2_getInstance() {
    Timers_initEntries_3();
    return Timers_Planes2_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(TimeOfDay), 'name', protoOf(TimeOfDay).h4);
  defineProp(protoOf(TimeOfDay), 'ordinal', protoOf(TimeOfDay).i4);
  defineProp(protoOf(TimeOfDay_0), 'name', protoOf(TimeOfDay_0).h4);
  defineProp(protoOf(TimeOfDay_0), 'ordinal', protoOf(TimeOfDay_0).i4);
  defineProp(protoOf(CameraMode), 'name', protoOf(CameraMode).h4);
  defineProp(protoOf(CameraMode), 'ordinal', protoOf(CameraMode).i4);
  defineProp(protoOf(TimeOfDay_1), 'name', protoOf(TimeOfDay_1).h4);
  defineProp(protoOf(TimeOfDay_1), 'ordinal', protoOf(TimeOfDay_1).i4);
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_3 = new Companion_3();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$arctic = $org$androidworks.arctic || ($org$androidworks.arctic = {});
    $org$androidworks$arctic.ArcticScene = ArcticScene;
    $org$androidworks$arctic.ArcticScene.setAnimationUniforms$default = setAnimationUniforms$default;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$arctic = $org$androidworks.arctic || ($org$androidworks.arctic = {});
    $org$androidworks$arctic.TimeOfDay = TimeOfDay;
    $org$androidworks$arctic.TimeOfDay.values = values;
    $org$androidworks$arctic.TimeOfDay.valueOf = valueOf;
    defineProp($org$androidworks$arctic.TimeOfDay, 'Day', TimeOfDay_Day_getInstance);
    defineProp($org$androidworks$arctic.TimeOfDay, 'Night', TimeOfDay_Night_getInstance);
    defineProp($org$androidworks$arctic.TimeOfDay, 'Sunrise', TimeOfDay_Sunrise_getInstance);
    defineProp($org$androidworks$arctic.TimeOfDay, 'Sunset', TimeOfDay_Sunset_getInstance);
    $org$androidworks$arctic.ArcticSettings = ArcticSettings;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$brutalism = $org$androidworks.brutalism || ($org$androidworks.brutalism = {});
    $org$androidworks$brutalism.DrawClockCommand = DrawClockCommand;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$brutalism = $org$androidworks.brutalism || ($org$androidworks.brutalism = {});
    $org$androidworks$brutalism.BrutalismScene = BrutalismScene;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$brutalism = $org$androidworks.brutalism || ($org$androidworks.brutalism = {});
    $org$androidworks$brutalism.BrutalismSettings = BrutalismSettings;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$cartoonlighthouse = $org$androidworks.cartoonlighthouse || ($org$androidworks.cartoonlighthouse = {});
    $org$androidworks$cartoonlighthouse.CartoonLighthouseScene = CartoonLighthouseScene;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$cartoonlighthouse = $org$androidworks.cartoonlighthouse || ($org$androidworks.cartoonlighthouse = {});
    $org$androidworks$cartoonlighthouse.TimeOfDay = TimeOfDay_0;
    $org$androidworks$cartoonlighthouse.TimeOfDay.values = values_0;
    $org$androidworks$cartoonlighthouse.TimeOfDay.valueOf = valueOf_0;
    defineProp($org$androidworks$cartoonlighthouse.TimeOfDay, 'Day', TimeOfDay_Day_getInstance_0);
    defineProp($org$androidworks$cartoonlighthouse.TimeOfDay, 'Night', TimeOfDay_Night_getInstance_0);
    defineProp($org$androidworks$cartoonlighthouse.TimeOfDay, 'Sunrise', TimeOfDay_Sunrise_getInstance_0);
    defineProp($org$androidworks$cartoonlighthouse.TimeOfDay, 'Sunset', TimeOfDay_Sunset_getInstance_0);
    $org$androidworks$cartoonlighthouse.CameraMode = CameraMode;
    $org$androidworks$cartoonlighthouse.CameraMode.values = values_1;
    $org$androidworks$cartoonlighthouse.CameraMode.valueOf = valueOf_1;
    defineProp($org$androidworks$cartoonlighthouse.CameraMode, 'Random', CameraMode_Random_getInstance);
    defineProp($org$androidworks$cartoonlighthouse.CameraMode, 'Orbiting', CameraMode_Orbiting_getInstance);
    $org$androidworks$cartoonlighthouse.CartoonLighthouseSettings = CartoonLighthouseSettings;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$cartoonplanes = $org$androidworks.cartoonplanes || ($org$androidworks.cartoonplanes = {});
    $org$androidworks$cartoonplanes.CartoonPlanesScene = CartoonPlanesScene;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$cartoonplanes = $org$androidworks.cartoonplanes || ($org$androidworks.cartoonplanes = {});
    $org$androidworks$cartoonplanes.TimeOfDay = TimeOfDay_1;
    $org$androidworks$cartoonplanes.TimeOfDay.values = values_2;
    $org$androidworks$cartoonplanes.TimeOfDay.valueOf = valueOf_2;
    defineProp($org$androidworks$cartoonplanes.TimeOfDay, 'Day', TimeOfDay_Day_getInstance_1);
    defineProp($org$androidworks$cartoonplanes.TimeOfDay, 'Night', TimeOfDay_Night_getInstance_1);
    defineProp($org$androidworks$cartoonplanes.TimeOfDay, 'Sunrise', TimeOfDay_Sunrise_getInstance_1);
    $org$androidworks$cartoonplanes.CartoonPlanesSettings = CartoonPlanesSettings;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$example = $org$androidworks.example || ($org$androidworks.example = {});
    $org$androidworks$example.ExampleScene = ExampleScene;
    defineProp($org$androidworks$example.ExampleScene, 'Companion', Companion_getInstance_2);
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$skyscrapers = $org$androidworks.skyscrapers || ($org$androidworks.skyscrapers = {});
    $org$androidworks$skyscrapers.SkyscrapersScene = SkyscrapersScene;
    var $org = _.org || (_.org = {});
    var $org$androidworks = $org.androidworks || ($org.androidworks = {});
    var $org$androidworks$skyscrapers = $org$androidworks.skyscrapers || ($org$androidworks.skyscrapers = {});
    $org$androidworks$skyscrapers.SkyscrapersSettings = SkyscrapersSettings;
  }
  $jsExportAll$(_);
  kotlin_org_androidworks_engine_engine.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=KMP-library-shared.js.map
