# aluve_calendar_web

# To run the frontend reactjs use below command
## npm run dev -- --host


# Deploy Reactjs App in Production
## Build the app by running the following commands
### 1. create a production build of the frontend
### 2.copy the production build into ${target/classes/}

###  use two maven plugins for steps 1 and 2 as shown below:
## frontend-maven-plugin for step 1 (FRontend Side).
## maven-resources-plugin for step 2 (Server side).

### 3. Add the following to your pom.xml under the plugins section and update the properties section as shown below:
 <properties>
    <java.version>1.8</java.version>
    <frontend-src-dir>${project.basedir}/src/main/frontend</frontend-src-dir>
    <node.version>v14.15.4</node.version>
    <yarn.version>v1.16.0</yarn.version>
    <frontend-maven-plugin.version>1.7.6</frontend-maven-plugin.version>
</properties>

<plugin>
    <groupId>com.github.eirslett</groupId>
    <artifactId>frontend-maven-plugin</artifactId>
    <version>${frontend-maven-plugin.version}</version>

    <configuration>
        <nodeVersion>${node.version}</nodeVersion>
        <yarnVersion>${yarn.version}</yarnVersion>
        <workingDirectory>${frontend-src-dir}</workingDirectory>
        <installDirectory>${project.build.directory}</installDirectory>
    </configuration>

    <executions>
        <execution>
            <id>install-frontend-tools</id>
            <goals>
                <goal>install-node-and-yarn</goal>
            </goals>
        </execution>

        <execution>
            <id>yarn-install</id>
            <goals>
                <goal>yarn</goal>
            </goals>
            <configuration>
                <arguments>install</arguments>
            </configuration>
        </execution>

        <execution>
            <id>build-frontend</id>
            <goals>
                <goal>yarn</goal>
            </goals>
            <phase>prepare-package</phase>
            <configuration>
                <arguments>build</arguments>
            </configuration>
        </execution>
    </executions>
</plugin>

### 4.  run mvn clean install from
####D:\Codes_projects\springboot_react_maven_plugin\Spring_React_maven-plugin> maven will install npm, yarn and node locally and run npm build in the frontend directory.
### 5. add the second plugin to your pom.xml
<plugin>
                <artifactId>maven-resources-plugin</artifactId>
                <executions>
                    <execution>
                        <id>position-react-build</id>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <phase>prepare-package</phase>
                        <configuration>
                            <outputDirectory>${project.build.outputDirectory}/static</outputDirectory>
                            <resources>
                                <resource>
                                    <directory>${frontend-src-dir}/build</directory>
                                    <filtering>false</filtering>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>

### 6. Add the following dependency in the dependencies section.
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>

### 7. Modify the spring-boot-maven-plugin to include a configuration section.
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <excludes>
            <exclude>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
            </exclude>
        </excludes>
    </configuration>
</plugin>

### 8. Now, run mvn clean install again and inspect the target/classes/static directory from your file manager.

### 9. Final pom.xml will look like this:
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.2</version>
        <relativePath /> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.springreact</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>demo</name>
    <description>Run React Frontend and SpringBoot Backend on the same port.</description>
    <properties>
        <java.version>1.8</java.version>
        <frontend-src-dir>${project.basedir}/src/main/frontend</frontend-src-dir>
        <node.version>v14.15.4</node.version>
        <yarn.version>v1.16.0</yarn.version>
        <frontend-maven-plugin.version>1.7.6</frontend-maven-plugin.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId> 
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
            <plugin>
                <groupId>com.github.eirslett</groupId>
                <artifactId>frontend-maven-plugin</artifactId>
                <version>${frontend-maven-plugin.version}</version>

                <configuration>
                    <nodeVersion>${node.version}</nodeVersion>
                    <yarnVersion>${yarn.version}</yarnVersion>
                    <workingDirectory>${frontend-src-dir}</workingDirectory>
                    <installDirectory>${project.build.directory}</installDirectory>
                </configuration>

                <executions>
                    <execution>
                        <id>install-frontend-tools</id>
                        <goals>
                            <goal>install-node-and-yarn</goal>
                        </goals>
                    </execution>

                    <execution>
                        <id>yarn-install</id>
                        <goals>
                            <goal>yarn</goal>
                        </goals>
                        <configuration>
                            <arguments>install</arguments>
                        </configuration>
                    </execution>

                    <execution>
                        <id>build-frontend</id>
                        <goals>
                            <goal>yarn</goal>
                        </goals>
                        <phase>prepare-package</phase>
                        <configuration>
                            <arguments>build</arguments>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <artifactId>maven-resources-plugin</artifactId>
                <executions>
                    <execution>
                        <id>position-react-build</id>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <phase>prepare-package</phase>
                        <configuration>
                            <outputDirectory>${project.build.outputDirectory}/static</outputDirectory>
                            <resources>
                                <resource>
                                    <directory>${frontend-src-dir}/build</directory>
                                    <filtering>false</filtering>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>

### 10. run your React app on http://localhost:8080/index.html

# link to cross check: https://dev.to/arpan_banerjee7/run-react-frontend-and-springboot-backend-on-the-same-port-and-package-them-as-a-single-artifact-14pa



