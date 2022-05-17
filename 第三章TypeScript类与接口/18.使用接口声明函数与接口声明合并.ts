{
    // 接口声明函数
    /*   interface Pay {
        (price: number): boolean;
    }
    const wepay: Pay = (price: number) => true; */

    // 接口声明合并 (重复声明接口 会自动合并)
    interface PlayEndInterface {
        end(): void;
    }
    interface PlayEndInterface {
        target: boolean;
    }
    // 接口继承
    interface AnimationInterface extends PlayEndInterface {
        name: string;
        move(): void;
    }

    // 抽象类 规范类 (没有具体逻辑) 约束继承类的规范
    abstract class Animation {
        protected getPos(): { x: number; y: number } {
            return { x: 100, y: 300 };
        }
    }

    class Tank extends Animation implements AnimationInterface {
        name: string = '敌方坦克';
        target: boolean = true;
        public move(): void {
            console.log(`${this.name}移动`);
        }
        public end(): void {
            console.log('游戏结束');
        }
    }

    class Player extends Animation implements AnimationInterface {
        name: string = '玩家';
        target: boolean = true;
        public move(): void {
            console.log(`${this.name}移动`);
        }
        public end(): void {
            console.log('游戏结束');
        }
    }

    const hd = new Tank();
    const play = new Player();
    hd.move();
    play.move();
}
