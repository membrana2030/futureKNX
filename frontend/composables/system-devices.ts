export function useSystemDevices(): SystemDevice[] {
  return [
    {
      slug: "power-supply",
      key: "ps640",
      code: "FTR-PS640.1.1",
      title: "KNX Power Supply 640mA",
      image: import("../assets/products/system-devices/ftr-ps640-1-1.webp"),
      ar: "ftr-ps640",
      cameraOrbit: "15deg 15deg 0",
      content: [
        "The KNX Power Supply is a 640 mA bus power supply with high efficiency. The device has an integrated bus choke and additional output for auxiliary power. The device has protection over 1200 mA loads and has autoreset function.",
      ],
      description:
        "The KNX Power Supply is a 640 mA bus power supply with high efficiency. The device has an integrated bus choke and additional output for auxiliary power.",
    },
    {
      slug: "universal-interface",
      key: "un8",
      code: "FTR-UN8.1.1",
      title: "8 Channels Universal Interface with RTC",
      image: import("../assets/products/system-devices/ftr-un8-1-1.webp"),
      ar: "ftr-un8",
      cameraOrbit: "160deg 90deg 200m",
      content: [
        "The KNX TP Universal Interface is a push button interface is suitable as a binary input for connecting up to eight conventional push buttons or potential-free contacts and integrated room temperature controls.",
        "- 4x10k NTC sensors input<br/> - 4 RTC zone thermostat function<br/> - 4x LED output<br/> - 40 &times; 40 &times; 13mm compact size",
      ],
      description:
        "The KNX TP Universal Interface is a push button interface is suitable as a binary input for connecting up to eight conventional push buttons or potential-free contacts and integrated room temperature controls.",
      dimension: {
        width: "40mm",
        height: "40mm",
        length: "13mm",
        weight: undefined,
      },
    },
    {
      slug: "bio5io",
      key: "bios5io",
      code: "FTR-SCD5OI.1.1",
      title: "BUS Integrated Object Server with 5 I/O",
      image: import("../assets/products/system-devices/ftr-bios5io-1-1.webp"),
      ar: "ftr-bios5io",
      content: [
        "BIOS Module is a cost effective way to make devices KNX-capable with 255 freely configurable channels (KNX data points).The modules serve as a serial interface to KNX.",
      ],
      description:
        "BIOS Module is a cost effective way to make devices KNX-capable with 255 freely configurable channels (KNX data points).The modules serve as a serial interface to KNX.",
    },
    {
      slug: "actuator-8",
      key: "msa0812",
      code: "FTR-MSA0812.1.1",
      title: "8 Output (16A) & 12 Input",
      subtitle: "Multi Switch Actuator",
      image: import("../assets/products/system-devices/ftr-msa0812-1-1.webp"),
      ar: "ftr-msa0812",
      cameraOrbit: "-58deg 35deg 0",
      content: [
        "Lights & Heating & Shutter & Fancoil controls. The compact multi switch actuator has 8 independent 16 A switching relays and 12 binary inputs.",
        "The outputs can be used individually via KNX for switching electrical loads or in pairs for controlling 230 V AC roller shutter or blind drives (no electromechanically interlocking). The device features a manual operation, which can also be disabled. Via the manual operation the outputs can be operated manually and the switching or driving status is displayed. The device is powered by KNX and requires no additional power supply. Works as a binary inputs for connecting conventional push buttons or potential-free contacts.",
      ],
      description:
        "Lights & Heating & Shutter & Fancoil controls. The compact multi switch actuator has 8 independent 16 A switching relays and 12 binary inputs.",
    },
    /*
    {
            slug: "actuator-12",
            key: "msa1212",
            code: "FTR-MSA1212.1.1",
            title: "12 Output (16A) & 12 Input",
            subtitle: "Multi Switch Actuator",
            image: import("../assets/products/system-devices/ftr-msa1212-1-1.webp"),
            ar: "ftr-msa1212",
            cameraOrbit: "15deg 20deg 0",
            content: [
                "Lights & Heating & Shutter & Fancoil controls. The compact multi switch actuator has 12 independent 16 A switching relays and 12 binary inputs.",
                "The outputs can be used individually via KNX for switching electrical loads or in pairs for controlling 230 V AC roller shutter or blind drives (no electromechanically interlocking). The device features a manual operation, which can also be disabled. Via the manual operation the outputs can be operated manually and the switching or driving status is displayed. The device is powered by KNX and requires no additional power supply. Works as a binary inputs for connecting conventional push buttons or potential-free contacts."
            ],
            description: "Lights & Heating & Shutter & Fancoil controls. The compact multi switch actuator has 12 independent 16 A switching relays and 12 binary inputs."
        },
        */
    {
      slug: "actuator-16",
      key: "msa1612",
      code: "FTR-MSA1612.1.1",
      title: "16 Output (16A) & 12 Input",
      subtitle: "Multi Switch Actuator",
      image: import("../assets/products/system-devices/ftr-msa1612-1-1.webp"),
      ar: "ftr-msa1612",
      cameraOrbit: "-58deg 35deg 0",
      content: [
        "Lights & Heating & Shutter & Fancoil controls. The compact multi switch actuator has 16 independent 16 A switching relays and 12 binary inputs.",
        "The outputs can be used individually via KNX for switching electrical loads or in pairs for controlling 230 V AC roller shutter or blind drives (no electromechanically interlocking). The device features a manual operation, which can also be disabled. Via the manual operation the outputs can be operated manually and the switching or driving status is displayed. The device is powered by KNX and requires no additional power supply. Works as a binary inputs for connecting conventional push buttons or potential-free contacts.",
      ],
      description:
        "The outputs can be used individually via KNX for switching electrical loads or in pairs for controlling 230 V AC roller shutter or blind drives.",
    },
    /*{
            slug: "actuator-20",
            key: "msa2012",
            code: "FTR-MSA2012.1.1",
            title: "20 Output (16A) & 12 Input",
            subtitle: "Multi Switch Actuator",
            image: import("../assets/products/system-devices/ftr-msa2012-1-1.webp"),
            ar: "ftr-msa2012",
            cameraOrbit: "15deg 20deg 0",
            cameraTarget: "0 0 0",
            content: [
                "Lights & Heating & Shutter & Fancoil controls. The compact multi switch actuator has 20 independent 16 A switching relays and 12 binary inputs.",
                "The outputs can be used individually via KNX for switching electrical loads or in pairs for controlling 230 V AC roller shutter or blind drives (no electromechanically interlocking). The device features a manual operation, which can also be disabled. Via the manual operation the outputs can be operated manually and the switching or driving status is displayed. The device is powered by KNX and requires no additional power supply. Works as a binary inputs for connecting conventional push buttons or potential-free contacts."
            ],
            description: "The compact multi switch actuator has 20 independent 16 A switching relays and 12 binary inputs."
        },*/
    {
      slug: "actuator-24",
      key: "msa2412",
      code: "FTR-MSA2412.1.1",
      title: "24 Output (16A) & 12 Input",
      subtitle: "Multi Switch Actuator",
      image: import("../assets/products/system-devices/ftr-msa2412-1-1.webp"),
      ar: "ftr-msa2412",
      cameraOrbit: "-58deg 35deg 0",
      content: [
        "Lights & Heating & Shutter & Fancoil controls. The compact multi switch actuator has 24 independent 16 A switching relays and 12 binary inputs.",
        "The outputs can be used individually via KNX for switching electrical loads or in pairs for controlling 230 V AC roller shutter or blind drives (no electromechanically interlocking). The device features a manual operation, which can also be disabled. Via the manual operation the outputs can be operated manually and the switching or driving status is displayed. The device is powered by KNX and requires no additional power supply. Works as a binary inputs for connecting conventional push buttons or potential-free contacts.",
      ],
      description:
        "The compact multi switch actuator has 24 independent 16 A switching relays and 12 binary inputs.",
    },
    {
      slug: "ac-gateway-daikin-industrial",
      key: "acdk",
      code: "FTR-ACDK.1.1",
      title: "KNX AC Gateway",
      subtitle: "<small>designed for</small> Daikin Industrial P1/P2",
      image: import("../assets/products/system-devices/ftr-acdk-1-1.webp"),
      ar: "ftr-acdk",
      cameraOrbit: "-135deg",
      content: [
        "The ACDK gateway enables bidirectional control of commercial and industrial air-conditioning from KNX systems. It offers 2 analog-digital inputs for temperature probes, motion sensors, or binary inputs. Additionally, it includes logic and converter functions, all packed into a compact 40 &times; 40 &times; 13 mm size.",
      ],
      description:
        "The ACDK gateway enables bidirectional control of commercial and industrial air-conditioning from KNX systems.",
    },
    {
      slug: "ac-gateway-mitsubishi-electric",
      key: "acme",
      code: "FTR-ACME.1.1",
      title: "KNX AC Gateway",
      subtitle: "<small>designed for</small> Mitsubishi Electric",
      image: import("../assets/products/system-devices/ftr-acme-1-1.webp"),
      ar: "ftr-acme",
      cameraOrbit: "-135deg -0 0",
      content: [
        "The ACME gateway enables bidirectional control of Mitsubishi Electric units via KNX systems. It offers 2 analog-digital inputs for temperature probes, motion sensors, or binary inputs, along with logic and converter functions, all in a compact 40 &times; 40 &times; 13 mm size."
      ],
      description:
        "The compact multi switch actuator has 24 independent 16 A switching relays and 12 binary inputs.",
    },
  ];
}
